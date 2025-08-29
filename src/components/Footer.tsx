export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex self-stretch justify-center">
      <p className="font-[mulish] text-[0.75rem]">
        &copy; {currentYear} Evelyn Law
      </p>
    </footer>
  );
}
