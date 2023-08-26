import Image from "next/image";
import Link from "next/link";
import {
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoGithub,
} from "react-icons/bi";

export const HeaderSection = () => {
  return (
    <div className="flex py-5 px-[10%] bg-dark-800 items-center justify-between">
      <div className="w-[50%] gap-5 flex flex-col items-start">
        <h1 className="text-2xl font-sb yellow-gradient-text tracking-[-2px]">
          Empowering Your Financial Journey.
        </h1>
        <p className="text-text-500 font-l text-3xs leading-[150%]">
          Discover financial freedom with our free budget management system.
          Navigate your financial journey with ease, empowered by our digital
          tools.
        </p>
        <Link
          href={"/"}
          className="bg-green-600 hover:bg-green-700 text-text-100 font-r button-solid"
        >
          Start Now
        </Link>
      </div>
      <Image
        width={400}
        height={400}
        className="w-[45%]"
        src={"/assets/header-image.png"}
        alt="Header Image"
      />
    </div>
  );
};

export const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-5 bg-dark-800 gap-5">
      <h2 className="text-2xl text-brand-100 font-sb tracking-[-1px] mb-5">
        Features
      </h2>
      <div className="flex flex-wrap items-center gap-[50px]">
        <div className="flex flex-col  gap-5 p-4 w-[300px] bg-gradient-to-r from-dark-700 to-dark-800 rounded-md ">
          <h2 className="text-sm font-sb yellow-gradient-text">
            Expense Tracking
          </h2>
          <p className="text-text-500 font-l text-3xs leading-[150%]">
            Expense tracking in a Budget Management System lets users closely
            monitor transactions, categorize income and expenses, and get
            real-time financial updates. This tool promotes budget adherence,
            fosters financial awareness, and empowers informed decision-making,
            goal-setting, and record-keeping.
          </p>
        </div>
        <div className="flex flex-col  gap-5 p-4 w-[300px] bg-gradient-to-r from-dark-700 to-dark-800 rounded-md">
          <h2 className="text-sm font-sb yellow-gradient-text">
            Real-time Updates
          </h2>
          <p className="text-text-500 font-l text-3xs leading-[150%]">
            Expense tracking in a Budget Management System lets users closely
            monitor transactions, categorize income and expenses, and get
            real-time financial updates. This tool promotes budget adherence,
            fosters financial awareness, and empowers informed decision-making,
            goal-setting, and record-keeping.
          </p>
        </div>
        <div className="flex flex-col  gap-5 p-4 w-[300px] bg-gradient-to-r from-text-200 to-text-500 rounded-md ">
          <h2 className="text-sm font-sb text-dark-800">Goal Setting</h2>
          <p className="text-dark-700 font-l text-3xs leading-[150%]">
            Expense tracking in a Budget Management System lets users closely
            monitor transactions, categorize income and expenses, and get
            real-time financial updates. This tool promotes budget adherence,
            fosters financial awareness, and empowers informed decision-making,
            goal-setting, and record-keeping.
          </p>
        </div>
        <div className="flex flex-col  gap-5 p-4 w-[300px] bg-gradient-to-r from-text-200 to-text-500 rounded-md ">
          <h2 className="text-sm font-sb text-dark-800">Security</h2>
          <p className="text-dark-700 font-l text-3xs leading-[150%]">
            Expense tracking in a Budget Management System lets users closely
            monitor transactions, categorize income and expenses, and get
            real-time financial updates. This tool promotes budget adherence,
            fosters financial awareness, and empowers informed decision-making,
            goal-setting, and record-keeping.
          </p>
        </div>
        <div className="flex flex-col  gap-5 p-4 w-[300px] bg-gradient-to-r from-dark-700 to-dark-800 rounded-md ">
          <h2 className="text-sm font-sb yellow-gradient-text">
            Expense Tracking
          </h2>
          <p className="text-text-500 font-l text-3xs leading-[150%]">
            Expense tracking in a Budget Management System lets users closely
            monitor transactions, categorize income and expenses, and get
            real-time financial updates. This tool promotes budget adherence,
            fosters financial awareness, and empowers informed decision-making,
            goal-setting, and record-keeping.
          </p>
        </div>
      </div>
    </div>
  );
};

export const CeoSection = () => {
  return (
    <div className="flex flex-col items-center bg-dark-800 py-5 px-[20%] gap-3">
      <h2 className="text-2xl text-brand-100 font-sb tracking-[-1px]">
        Meet our CEO
      </h2>
      <Image
        width={400}
        height={300}
        className="rounded-[100%] h-[250px] w-[250px] object-cover"
        alt="Dev Photo"
        src={"/assets/DEV_PHOTO.jpg"}
      />
      <h3 className="text-lg text-text-200 font-r">Prajwol Neupane</h3>
      <div className="flex items-center gap-5">
        <Link target="blank" href={"https://github.com/PrajwolNeupane"}>
          <BiLogoGithub className="text-sm" color="white" />
        </Link>
        <Link
          target="blank"
          href={"https://www.instagram.com/iamprajwolneupane/"}
        >
          {" "}
          <BiLogoInstagramAlt className="text-sm" color="white" />
        </Link>
        <Link
          target="blank"
          href={"https://www.linkedin.com/in/prajwol-neupane-b64418208/"}
        >
          <BiLogoLinkedin className="text-sm" color="white" />
        </Link>
      </div>
      <p className="text-text-500 font-l text-3xs leading-[150%] text-center">
        Meet Prajwol Neupane, the innovative CEO at the helm of FinanSmart, a
        dynamic startup revolutionizing personal finance. At FinanSmart, he
        spearheads a cutting-edge platform that offers a free and user-friendly
        budget management system, empowering individuals to take charge of their
        financial destinies. With a deep commitment to enhancing financial
        literacy and providing tools for financial freedom, Prajwol's leadership
        drives individuals to navigate their financial journeys with confidence,
        supported by the digital prowess of FinanSmart's empowering
        technologies.
      </p>
    </div>
  );
};
