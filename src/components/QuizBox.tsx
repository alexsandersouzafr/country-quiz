import tw from "tailwind-styled-components";
import TitleIllustration from "./TitleIllustration";

const MainBox = tw.div`
    relative
    flex
    flex-col
    gap-8
    w-[29rem]
    px-8
    py-[4.25rem]
    rounded-[1.5rem]
    bg-white
`;

const Question = tw.div`
    text-[#2F527B]
    text-[1.5rem]
    font-bold
`;

const Container = tw.div`
relative`;

const AnswerWrapper = tw.div`
    flex
    flex-col
    gap-[1.56rem]        
`;

const Option = tw.div`
    flex
    gap-[2.80rem]
    items-center
    cursor-pointer
    rounded-[0.75rem]
    border-2
    border-[#6066D0FF]
    text-[#6066D0B4]
    bg-white
    hover:bg-[#F9A826]
    hover:border-[#F9A826]
    hover:text-white
    w-full
    h-[3.5rem]
    px-[1.19rem]
    transition-all

    [&>div:nth-child(1)]:text-[1.5rem]
    [&>div:nth-child(2)]:text-[1.125rem]
`;

export default function QuizBox() {
  return (
    <Container>
      <TitleIllustration />
      <MainBox>
        <Question>Kuala Lumpur is the capital of</Question>
        <AnswerWrapper>
          <Option>
            <div>A</div>
            <div>Vietnam</div>
          </Option>
          <Option>
            <div>B</div>
            <div>Vietnam</div>
          </Option>
          <Option>
            <div>C</div>
            <div>Vietnam</div>
          </Option>
          <Option>
            <div>D</div>
            <div>Vietnam</div>
          </Option>
        </AnswerWrapper>
      </MainBox>
    </Container>
  );
}
