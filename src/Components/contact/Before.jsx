import footer from "../../assets/contactus02.svg"

const Before = () => {
  return (
    <>

    <div className="bg-[#6D1E3F] text-[#F0D08E] relative overflow-hidden py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={footer}
              alt="Woman talking on phone"
              className="rounded-lg shadow-lg w-full h-80"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="text-xl">
              "We'd love to hear from you! For any inquiries, feedback, or assistance, feel free to reach out to us. We're here to help make your experience exceptional."
            </p>
            <button className="bg-white text-[#6D1E3F] px-8 py-3 rounded-full text-xl font-semibold hover:bg-opacity-90 transition-colors">
              Book
            </button>
          </div>
        </div>
    </div>

    <div className="h-[15vh] bg-yellow-100"></div>
    </>

  )
}

export default Before