
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { introMyWorkContent, introSkillsContent } from "@/data/utils-data";
import IntroContent from "@/components/IntroContent";


const IntroPage: React.FC = () => {

  return (
    <>
      <div className="p-8">
        <div className="md:grid grid-cols-2 mb-20">
          <div className="grid gap-4 md:content-start">
            <div className="text-3xl font-bold">Hi, Im KSdeve</div>
            <p>Im a full-stack web developer with a passion for creating beautiful and functional websites.
              I have experience working with a variety of technologies, including React, Node.js, and MongoDB.</p>
            <div role="intro-button">
              <Button className="w-fit px-5">view my work</Button>
              <Button className="w-fit px-5 ml-4">contact me</Button>
            </div>
          </div>
          <div role="intro-image" className="flex justify-center">
            <Image
              src="/images/mickey.jpeg"
              alt="mickey-image"
              width={300}
              height={300}
              className="rounded-full m-6"
            />
          </div>
        </div>

        <div className="md:grid grid-cols-2 mb-20" >
          <IntroContent name={introSkillsContent.name} body={introSkillsContent.body} className="mb-8" />
          <IntroContent name={introMyWorkContent.name} body={introMyWorkContent.body} className="mb-8" />
        </div>

        {/* <div>
          <div>
            <GetInTouchForm />
            <p>contact info</p>
          </div>
        </div> */}

      </div>
    </>
  );
};

export default IntroPage;
