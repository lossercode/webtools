import LectureForm from "@/component/lecture/LectureForm"
import LectureHeader from "@/component/lecture/LectureHeader"
import { Button, Image } from "antd"

export default function Lecture() {
    return (
        <div className="bg-[#f3f6f9] min-h-screen">
            <header className="bg-white container-padding h-16 flex shadow justify-between">
                <LectureHeader />
            </header>
            <main className="container-padding my-6 ">
                <LectureForm />
            </main>
        </div>
    )
}