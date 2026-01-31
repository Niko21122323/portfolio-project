import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { HiArrowTurnDownRight } from "react-icons/hi2";

export default function Home() {
  return (
    <section className="h-[200vh]">
      <div className="container mx-auto">
        <PrimaryButton text="More About Me" link={"/about"}>
          <HiArrowTurnDownRight />
        </PrimaryButton>
      </div>
    </section>
  );
}
