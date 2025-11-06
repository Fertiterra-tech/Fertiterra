"use client"

import { useEffect, useState, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/context/auth-context"
import { Mic, MicOff, Video, VideoOff, Phone, MessageSquare, FileText, Share2, Send, PaperclipIcon } from "lucide-react"

// Mock data for doctors
const doctors = {
  "dr-sarah-johnson": {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Reproductive Endocrinologist",
    image: "/images/doctor-1.jpg",
  },
  "dr-michael-chen": {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    title: "OB/GYN, Fertility Specialist",
    image: "/images/doctor-2.jpg",
  },
  "dr-amara-patel": {
    id: "dr-amara-patel",
    name: "Dr. Amara Patel",
    title: "Reproductive Immunologist",
    image: "/images/doctor-3.jpg",
  },
  "dr-james-wilson": {
    id: "dr-james-wilson",
    name: "Dr. James Wilson",
    title: "Reproductive Urologist",
    image: "/images/doctor-4.jpg",
  },
}

export default function ConsultationRoomPage() {
  const { user } = useAuth()
  const router = useRouter()
  const params = useParams()
  const doctorId = params.doctorId as string

  const [doctor, setDoctor] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [connected, setConnected] = useState(false)
  const [waitingForDoctor, setWaitingForDoctor] = useState(true)
  const [micEnabled, setMicEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([])

  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    if (doctorId && doctors[doctorId as keyof typeof doctors]) {
      setDoctor(doctors[doctorId as keyof typeof doctors])
    } else {
      router.push("/consultation")
      return
    }

    setLoading(false)

    // Simulate connection after 2 seconds
    const timer = setTimeout(() => {
      setConnected(true)

      // Simulate doctor joining after 5 more seconds
      const doctorTimer = setTimeout(() => {
        setWaitingForDoctor(false)
      }, 5000)

      return () => clearTimeout(doctorTimer)
    }, 2000)

    // Set up local video
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream
          }
        })
        .catch((error) => {
          console.error("Error accessing media devices:", error)
        })
    }

    // Clean up
    return () => {
      clearTimeout(timer)

      // Stop all video/audio streams
      if (localVideoRef.current && localVideoRef.current.srcObject) {
        const stream = localVideoRef.current.srcObject as MediaStream
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [doctorId, user, router])

  const toggleMic = () => {
    setMicEnabled(!micEnabled)

    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream
      stream.getAudioTracks().forEach((track) => {
        track.enabled = !micEnabled
      })
    }
  }

  const toggleVideo = () => {
    setVideoEnabled(!videoEnabled)

    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream
      stream.getVideoTracks().forEach((track) => {
        track.enabled = !videoEnabled
      })
    }
  }

  const endCall = () => {
    // Stop all video/audio streams
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream
      stream.getTracks().forEach((track) => track.stop())
    }

    router.push("/consultation/feedback")
  }

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: "You",
        text: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, newMessage])
      setMessage("")

      // Simulate doctor response after 2 seconds
      setTimeout(() => {
        const doctorResponse = {
          sender: doctor.name,
          text: "Thank you for sharing that information. Let's discuss this further.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prevMessages) => [...prevMessages, doctorResponse])
      }, 2000)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
          <p>Setting up your consultation...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white border-b py-2 px-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/fertiterra-logo.png"
              alt="FertiTerra Logo"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            {connected && !waitingForDoctor && (
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 rounded-full overflow-hidden">
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium">{doctor.name}</p>
                  <p className="text-xs text-gray-500">{doctor.title}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">
                {!connected ? "Connecting..." : waitingForDoctor ? "Waiting for doctor to join..." : "Connected"}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Video area */}
        <div className="flex-1 flex flex-col relative bg-gray-900">
          {/* Main video (doctor) */}
          {connected && !waitingForDoctor ? (
            <div className="flex-1 relative">
              <video
                ref={remoteVideoRef}
                className="w-full h-full object-cover"
                autoPlay
                playsInline
                poster="/images/doctor-video-placeholder.jpg"
              ></video>
              <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                {doctor.name}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-800">
              {!connected ? (
                <div className="text-center text-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-2 border-white border-b-transparent mx-auto mb-4"></div>
                  <p>Connecting to your consultation...</p>
                </div>
              ) : (
                <div className="text-center text-white">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto mb-4">
                    <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                  </div>
                  <p className="text-xl font-medium mb-2">{doctor.name}</p>
                  <p className="text-gray-300 mb-4">{doctor.title}</p>
                  <div className="animate-pulse">
                    <p>Waiting for doctor to join the call...</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Self view (picture-in-picture) */}
          <div className="absolute bottom-4 right-4 w-48 h-36 md:w-64 md:h-48 rounded-lg overflow-hidden border-2 border-white shadow-lg">
            <video ref={localVideoRef} className="w-full h-full object-cover" autoPlay playsInline muted></video>
            <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-0.5 rounded text-xs">You</div>
          </div>

          {/* Call controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full h-12 w-12 ${micEnabled ? "bg-gray-800 text-white" : "bg-red-500 text-white"}`}
              onClick={toggleMic}
            >
              {micEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full h-12 w-12 ${videoEnabled ? "bg-gray-800 text-white" : "bg-red-500 text-white"}`}
              onClick={toggleVideo}
            >
              {videoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 bg-red-500 text-white hover:bg-red-600"
              onClick={endCall}
            >
              <Phone className="h-5 w-5 rotate-135" />
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-80 lg:w-96 bg-white border-l flex flex-col h-64 md:h-auto">
          <Tabs defaultValue="chat" className="flex flex-col h-full">
            <TabsList className="grid grid-cols-3 mx-4 my-2">
              <TabsTrigger value="chat">
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="notes">
                <FileText className="h-4 w-4 mr-2" />
                Notes
              </TabsTrigger>
              <TabsTrigger value="share">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="flex-1 flex flex-col p-0 m-0">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>No messages yet</p>
                    <p className="text-sm">Send a message to start the conversation</p>
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          msg.sender === "You"
                            ? "bg-rose-500 text-white rounded-br-none"
                            : "bg-gray-100 rounded-bl-none"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-xs">{msg.sender}</span>
                          <span className="text-xs opacity-70">{msg.time}</span>
                        </div>
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[60px] resize-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        sendMessage()
                      }
                    }}
                  />
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <PaperclipIcon className="h-4 w-4" />
                    </Button>
                    <Button size="icon" className="h-8 w-8 bg-rose-500 hover:bg-rose-600" onClick={sendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notes" className="flex-1 flex flex-col p-4 m-0 space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Consultation Notes</h3>
                <p className="text-sm text-gray-500">
                  Take notes during your consultation. These will be saved to your account.
                </p>
              </div>
              <Textarea placeholder="Type your notes here..." className="flex-1 min-h-[200px]" />
              <Button className="w-full bg-rose-500 hover:bg-rose-600">Save Notes</Button>
            </TabsContent>

            <TabsContent value="share" className="flex-1 p-4 m-0 space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Share Documents</h3>
                <p className="text-sm text-gray-500">
                  Share relevant medical records or test results with your doctor.
                </p>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg border-gray-300 bg-gray-50 cursor-pointer hover:bg-gray-100">
                    <div className="text-center">
                      <PaperclipIcon className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF, JPG, PNG (max 10MB)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <h3 className="font-medium">Recent Documents</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-rose-500" />
                      <div>
                        <p className="text-sm font-medium">Hormone Test Results.pdf</p>
                        <p className="text-xs text-gray-500">Uploaded 2 days ago</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Share
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-rose-500" />
                      <div>
                        <p className="text-sm font-medium">Medical History.pdf</p>
                        <p className="text-xs text-gray-500">Uploaded 1 week ago</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
