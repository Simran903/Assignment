import React from 'react'
import ResourcesComponent from './ResourcesComponent'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'

const Resources = () => {
  return (
    <div className="mb-20">
      <div className="py-0.5 white">
        <div className="w-full mt-12 md:mt-24">
          <div className="flex justify-center">
            <div className="w-full px-7 md:px-20 max-w-screen-2xl">
              <div className="flex justify-center">
                <div className="w-full md:text-center max-w-3xl">
                  <h2 className="text-4xl md:text-5xl font-display font-bold md:text-center">
                    Secure, Private, Professional
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto md:text-center">
        <p className="px-8 mt-8 mb-4 md:text-lg text-xl leading-loose">
          We know controlling who sees what - be it teammates or clients - is
          crucial. Boords helps you keep storyboards private with password
          protection, project-level access control, and custom workspace URLs.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ResourcesComponent
          heading="Share with Confidence"
          para="Never share something you don't want clients to see. Share links to specific storyboard versions, with or without comments."
          image={img1}
        />
        <ResourcesComponent
          heading="Completely Confidential"
          para="All content you upload to or create within Boords is completely hidden from everyone, including the Boords team, unless you choose to share it."
          image={img2}
          className="flex-row-reverse"
        />
      </div>
    </div>
  )
}

export default Resources