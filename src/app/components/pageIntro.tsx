export default function PageIntro({
  header,
  content,
}: {
  header: string;
  content: any;
}) {
  return (
    <div className={"text-white p-7 max-md:mt-8"}>
      <h2 className={"text-2xl pb-5 text-center"}>{header}</h2>
      <div className={"text-xl"}>{content}</div>
    </div>
  );
}
