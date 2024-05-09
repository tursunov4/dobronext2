import Productitem from "@/page/Productitem";

export async function generateMetadata({ params }) {
  const product = await fetch(
    `https://admin.dobroseptik.ru/api/v1/productsproduct-detail/${params?.id}/`,
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
    title: product?.seo?.at(0)?.title,
    description: product?.seo?.at(0)?.description,
  };
}

export default function Page({ params }) {
  return (
    <>
      <Productitem params={params} />
    </>
  );
}
