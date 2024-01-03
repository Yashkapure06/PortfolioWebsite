import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  Center,
  useColorModeValue,
  useSteps,
  Progress,
} from "@chakra-ui/react";
const steps = [
  {
    title: "Front End Developer Intern (Remote) - Next.js",
    duration: "24th Dec 2021 - 6th June 2022",
    companyName: "Anandlok Ayurveda & Panchakarma Hospital",
    description:
      "Designed and developed a fully functional website using the latest technologies such as Next.js and React.js.     Worked independently to create engaging web content and    reusable components.    Contributed to the development of the website and helped    to improve the performance of the website",
  },
  {
    title: "Full Stack Developer Part-Time (Remote) - MEVN",
    duration: "3rd May 2023 - 30th Nov 2023",
    companyName: "Dr. Manisha's Yoga Institute",
    description:
      "Worked remotely as a full stack developer, Stacks used:    Vue.js (frontend), MongoDB, Node.js, Express.js, Firebase    for blogging    A fully Authenticated Admin Panel is also created to    perform CRUD Operations    Using Tailwind CSS to design the whole website    Worked independently to create engaging web content and    reusable components",
  },
  {
    title: "Software Developer Trainee Full-Time (On-Site) -  Salesforce",
    duration: "1st Aug 2023 - 30th Nov 2023",
    companyName: "Extentia Information Technology",
    description:
      "Worked as a Software Developer Trainee. Technologies I got to learn over here is Salesforce. Along with salesforce, I worked on Programming Language like Apex, Aura and JavaScript.",
  },
  {
    title: "Front End Developer Contract (Remote) - Next.js",
    duration: "1st Nov 2023 - 31th Dec 2023",
    companyName: "Care-9 Fertility Clinic/Hospital",
    description:
      "Worked remotely on the project, designed the whole using Tailwind CSS. Developed Front-end using latest technologies which is basically a JavaScript Library React.js whose expanded version is NEXT.JS 14 along with basic TypeScript.",
  },
  {
    title: "React.js Developer Full-Time (On-Site)",
    duration: "1st Jan 2024 - Present",
    companyName: "Octane Apps",
    description:
      "Working in one of the famous and trending JavaScript Library React.js along with it's Framework Next.js. Developing new Projects, working on front-end development and, maintaining and managing old projects.",
  },
];

const Experience = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: steps.length - 1,
    count: steps.length,
  });

  const max = steps.length;
  const progressPercent = (activeStep / max) * 100;

  return (
    <Box
      p={4}
      id="experience"
      textAlign="center"
      style={{ overflow: "hidden" }}
    >
      <Center py={4}>
        <Text
          textTransform="uppercase"
          color="blue.400"
          fontWeight={600}
          fontSize="sm"
          bg={useColorModeValue("blue.50", "blue.900")}
          p={2}
          alignSelf="flex-start"
          rounded="md"
        >
          My Experience
        </Text>
      </Center>

      <Center>
        <Box width={{ base: "100%", md: "80%", lg: "50%" }}>
          <Stepper
            activeStep={0}
            lineWidth={3}
            steps={steps.length}
            orientation="vertical"
            index={activeStep}
          >
            {steps.map((step, index) => (
              <Step mt={2} m={15} key={index}>
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>

                <Box
                  p={4}
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="10px"
                  overflow="hidden"
                  scrollMarginY={10}
                >
                  <StepTitle fontSize="18px" fontWeight="bold">
                    {step.title}
                  </StepTitle>
                  <StepDescription fontWeight="bold" fontSize="0.8em">
                    {step.duration}
                  </StepDescription>
                  <StepDescription fontWeight="bold">
                    {step.companyName}
                  </StepDescription>
                  <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>
      </Center>

      <Progress
        value={progressPercent}
        position="absolute"
        height="3px"
        width="full"
        top="10px"
        zIndex={-1}
      />
    </Box>
  );
};
export default Experience;
