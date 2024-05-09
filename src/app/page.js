import Mainpage from "@/page/Mainpage";
import "./main.css";
import Script from "next/script";
export async function generateMetadata() {
  const product = await fetch(
    `https://admin.dobroseptik.ru/api/v1/aboutmain-page-seo/`,
    {
      headers: {
        Authorization: `Token b54f02f46e52cd1f451efa07208c66a0181d7a6d`,
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });

  return {
    title: product?.at(0)?.title,
    description: product?.at(0)?.description,
  };
}

export default function Home() {
  return (
    <>
      <Mainpage />
    </>
  );
}
