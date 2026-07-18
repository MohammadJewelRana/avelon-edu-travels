import HomeContact from "../home/_components/Contact";
import MedicalVisaProcess from "./_components/MedicalProcess";
import MedicalVisaHero from "./_components/MedicalVisaHero";
import MedicalVisaIntro from "./_components/MedicalVisaIntro";
import MedicalVisaPackages from "./_components/MedicalVisaPackages";
 
import MedicalVisaWhyUs from "./_components/MedicalVisaWhyUs";
import TrustStats from "./_components/TrustStats";
 

 


const MedicalVisa=()=>{
//     return(
//  <div>

//      <TrustStats/>
  
//      <MedicalVisaIntro/>
//  </div>

//     )
return (
    <>
 

      <main>
        <MedicalVisaHero/>
        <TrustStats/>
        <MedicalVisaIntro />
        <MedicalVisaProcess />
        <MedicalVisaPackages />
        <MedicalVisaWhyUs />
  
  <HomeContact/>
 
      </main>
    </>
  );
}

export default MedicalVisa;