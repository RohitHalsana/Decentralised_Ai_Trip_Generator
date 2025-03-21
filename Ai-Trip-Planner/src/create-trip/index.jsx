import React, { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";
import { AI_PROMT, SelecetBudgetOptions, SelectTravelsList } from "@/constants/Options";
import { toast } from "sonner";
import { chatSession } from "@/service/AIModal";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";


function CreateTrip() {

  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    }
    )
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  })

  const OnGenerateTrip = async () => {

    const user = localStorage.getItem('user');
    if (!user) {
      setOpenDialog(true)
      return;
    }

    if (formData?.noOfDays > 10 && !formData?.location || !formData?.budget || !formData?.traveler) {
      toast("Please fill the form properly...")
      return
    }

    setLoading(true)
    const FINAL_PROMPT = AI_PROMT
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveler}', formData?.traveler)
      .replace('{budget}', formData?.budget)
      .replace('{totalDays}', formData?.noOfDays)

    console.log(FINAL_PROMPT)
    console.log("generating....")

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text())

    
    SaveAiTrip(result?.response?.text())
    setLoading(false)
  }

  const SaveAiTrip = async (TripData) => {
    setLoading(true)
    const user = JSON.parse(localStorage.getItem('user'))
    const docId = Date.now().toString()
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId
    });
    setLoading(false)
    navigate('/view-trip/'+docId)
  }

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data))
      setOpenDialog(false)
      OnGenerateTrip()
    }).catch((error) => {
      console.log("Some error has occured while axios fetch", error)
    })

  }

  return (
    <div className="sm:px-10 md:px-32 lg:px-36 xl:px-72 px-5 mt-10">
      <h2 className="text-center font-semibold text-[30px]">
        Customise your Trip
      </h2>
      <p className="text-center">
        Tell your preferences and let the AI do the rest
      </p>
      <div className="mt-10 flex flex-col gap-10">
        <div>
          <h2 className="text-xl font-semibold">Where is your destination?</h2>
          {/* <GooglePlacesAutocomplete
          apiKey=''
          /> */}
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            How many days do you want to Travel ?
          </h2>
          <Input className="mt-5" placeholder="Ex. 3" type="number"
            onChange={(e) => {
              handleSubmit('noOfDays', e.target.value)
            }}
          ></Input>
        </div>
        <div>
          <h2 className="text-xl font-semibold">What is your budget ?</h2>
          <div className="grid grid-cols-3 gap-5">
            {SelecetBudgetOptions.map((item, index) => (
              <div key={index} className={`p-4 border rounded-md hover:shadow-lg
                ${formData?.budget == item.title && 'border-black bg-green-200'}
                `}
                onClick={() => {
                  handleSubmit('budget', item.title)
                }}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-small text-gray-600">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Whom with you planning to travel ?</h2>
          <div className="grid grid-cols-3 gap-5">
            {SelectTravelsList.map((item, index) => (
              <div key={index} className={`p-4 border rounded-md hover:shadow-lg
                ${formData?.traveler == item.title && 'border-black bg-green-200'}
                `}
                onClick={() => {
                  handleSubmit('traveler', item.title)
                }}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-small text-gray-600">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mb-10">
          <button className="text-white" disabled={loading} onClick={OnGenerateTrip}>
            {loading? <AiOutlineLoading3Quarters className="animate-spin" /> :'Generate Trip'}</button>
        </div>

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sign in required</DialogTitle>
              <DialogDescription>
                Use your gmail account to Sign in
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={login}
              >Sign In</Button>
              {/* <Button variant="secondary" onClick={() => setOpenDialog(false)}>Close</Button> */}
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}

export default CreateTrip;
