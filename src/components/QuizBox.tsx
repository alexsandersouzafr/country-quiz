import tw from "tailwind-styled-components";
import TitleIllustration from "./TitleIllustration";

const MainBox = tw.div`
    flex
    flex-col
    w-[29rem]
    relative
    px-8
    py-[4.25rem]
    rounded-[1.5rem]
    bg-white
`;

const Title = tw.div`
    absolute
    -top-16
    `;

const Question = tw.div`
    text-[#2F527B]
    text-[1.5rem]
    font-bold
`;

const Container = tw.div`
relative`;

export default function QuizBox() {
  return (
    <Container>
      <TitleIllustration />
      <MainBox>
        <Question>Kuala Lumpur is the capital of</Question>
      </MainBox>
    </Container>
  );
}
