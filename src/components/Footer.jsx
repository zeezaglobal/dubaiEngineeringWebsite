import { COMPANY_NAME } from "../utils/globals";
export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      © {new Date().getFullYear()}  { COMPANY_NAME } . All rights reserved.
    </footer>
  );
}
