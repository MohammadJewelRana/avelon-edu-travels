import HomeContact from "../home/_components/Contact";
import MedicalVisaProcess from "./_components/MedicalProcess";
import MedicalVisaCountries from "./_components/MedicalVisaCountries";
import MedicalVisaHero from "./_components/MedicalVisaHero";



import MedicalVisaWhyUs from "./_components/MedicalVisaWhyUs";
import TrustStats from "./_components/TrustStats";

const MedicalVisa = () => {
  return (
    <>
      <main>
        <MedicalVisaHero />
        <TrustStats />
        <MedicalVisaCountries />

        <MedicalVisaProcess />
        {/* <MedicalVisaPackages /> */}
        <MedicalVisaWhyUs />

        <HomeContact />
      </main>
    </>
  );
};

export default MedicalVisa;
