import Image from 'next/image'

export const GarageSection = () => {
  return (
    <section className="h-screen bg-[url('../assets/images/background-garage.jpg')] bg-cover grid md:grid-cols-2">
      <div className="ml-5 ">
        <Image
          src={'/Garage-logo.svg'}
          alt={''}
          width={100}
          height={100}
        ></Image>
        <h1 className="font-bold text-white text-3xl">
          Garage ISEP - Inovation Hub
        </h1>
        <p className="mt-5 text-white text-xl">
          Whether it’s training for a marathon or swimming laps at the pool,
          Apple Watch Series 4 has something for everyone. Now including yoga
          and hiking, the Workout app works every way you want to exercise. You
          can set individual goals, measure your calorie burn, and track your
          progress over time in the Activity app on your iPhone. Ready? Go.
        </p>
      </div>
    </section>
  )
}
