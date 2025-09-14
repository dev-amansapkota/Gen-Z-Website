import React from 'react'
import { BiGroup } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'

const UniversityCard = () => {
  return (
    <div><h2 className="text-2xl sm:text-3xl font-bold text-center my-8">
            Colleges/Universities
          </h2>
          <section className="px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
            {[
              {
                name: 'Kathmandu University',
                img: 'https://utfs.io/f/iCN7oS8Yds8D7UNKY8nm6uNiY2ySwR9CtVMBF30bOr845UfD',
                logo: 'https://utfs.io/f/iCN7oS8Yds8D5FscYKNIs9q3Y6xHKaQpGCJj5VXF4tzPEwof',
                location: 'Dhulikhel Nepal',
                students: '16000 Students',
                type: 'Government',
              },
              {
                name: 'Agriculture and Forestry University',
                img: 'https://utfs.io/f/iCN7oS8Yds8Df605MYaP8m9nFwGR0SjlMEfq4OCKV2zvtYsb',
                logo: 'https://utfs.io/f/iCN7oS8Yds8DQTO2SNyTEx7nI39RkfjXLueMFZ8bGBi6PDQd',
                location: 'Chitwan Nepal',
                students: '2000 Students',
                type: 'Public',
              },
              {
                name: 'Rajarshi Janak University',
                img: 'https://utfs.io/f/iCN7oS8Yds8DD1Y3xzhLpQw5RofWtUmskEqhXbHNdDMxFAYr',
                logo: 'https://utfs.io/f/iCN7oS8Yds8Dly5MlgiHnAISD2jENBtoFRJkUdabs9w4zpLY',
                location: 'Janakpur',
                students: '2569+ Students',
                type: 'Government',
              },
            ].map((uni, index) => (
              <div
                key={index}
                className="relative bg-white text-black rounded-lg overflow-hidden"
              >
                <img
                  src={uni.img}
                  alt={uni.name}
                  width={500}
                  height={240}
                  className="w-full h-48 sm:h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-32 left-4  w-20 h-20 bg-white shadow-xl rounded-lg flex items-center justify-center">
                  <img
                    src={uni.logo}
                    alt={`${uni.name} Logo`}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{uni.name}</h3>
                  <div className="flex items-center text-zinc-500 mt-2">
                    <CiLocationOn className="text-lg" />
                    <span className="ml-1 text-sm">{uni.location}</span>
                  </div>
                  <div className="flex items-center text-zinc-500 mt-1">
                    <BiGroup className="text-lg" />
                    <span className="ml-1 text-sm">{uni.students}</span>
                  </div>
                  <div className="flex justify-end mt-2">
                    <span className="px-4 py-1 bg-blue-400 rounded-full text-sm">
                      {uni.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </section>
    </div>
  )
}

export default UniversityCard