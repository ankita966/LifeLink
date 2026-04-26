"use client"

import Navbar from "@/components/navbar"
import EmergencyRequestForm from "@/components/emergency/request-form"
import Footer from "@/components/footer"

export default function EmergencyRequestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <EmergencyRequestForm />
      </main>
      <Footer />
    </div>
  )
}
