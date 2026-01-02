import React from "react";
import Title from "../components/Title";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"PRIVACY"} text2={"POLICY"} />
      </div>

      <div className="my-10 flex flex-col gap-6 md:w-3/4 text-gray-600">
        <p>
          At August &amp; Sage ("we", "us", "our"), your privacy matters.
          This Privacy Policy explains what data we collect, why we collect it,
          and how we use, store, and protect it when you use our website,
          purchase products, or interact with our services.
        </p>

        <b className="text-gray-800">Information We Collect</b>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>
            <span className="font-medium text-gray-700">Account &amp; Contact Details:</span>
            Name, email, phone number, shipping/billing addresses.
          </li>
          <li>
            <span className="font-medium text-gray-700">Order &amp; Transaction Data:</span>
            Products purchased, order IDs, delivery status, and payment confirmations
            processed securely via our payment partners. We do not store full
            card details on our servers.
          </li>
          <li>
            <span className="font-medium text-gray-700">Usage &amp; Device Data:</span>
            Pages visited, search queries, approximate location, browser/device
            information, and cookies to keep your session signed in and improve
            site experience.
          </li>
          <li>
            <span className="font-medium text-gray-700">Support &amp; Communication:</span>
            Messages you send to our team (email, chat, forms) and feedback.
          </li>
        </ul>

        <b className="text-gray-800">How We Use Your Information</b>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>Process and deliver your orders, and provide customer support.</li>
          <li>Authenticate accounts, prevent fraud, and ensure platform security.</li>
          <li>Improve our catalog, search, and website performance.</li>
          <li>Send service updates (order status, delivery notifications).</li>
          <li>
            With consent, send curated offers and newsletters — you can opt out
            anytime.
          </li>
        </ul>

        <b className="text-gray-800">Cookies &amp; Similar Technologies</b>
        <p>
          We use cookies to keep you signed in, remember preferences, and
          measure site performance. You can control cookies from your browser
          settings; disabling essential cookies may affect site functionality.
        </p>

        <b className="text-gray-800">Sharing Your Information</b>
        <p>
          We do not sell your personal data. We share necessary information with
          trusted providers to run our business, including payment processors,
          logistics/shipping partners, analytics and security tools. These
          partners process data only to deliver their services and are bound by
          confidentiality and data protection obligations.
        </p>

        <b className="text-gray-800">Data Security &amp; Retention</b>
        <p>
          We apply reasonable technical and organizational measures to protect
          your data. Order records may be retained for legal, accounting, and
          fraud prevention purposes. We retain other data only as long as needed
          for the purposes described in this policy.
        </p>

        <b className="text-gray-800">Your Rights</b>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>Access, correct, or delete certain personal information.</li>
          <li>Opt out of marketing communications.</li>
          <li>Withdraw consent where processing is based on consent.</li>
        </ul>
        <p>
          Depending on your location, you may have additional rights under
          applicable laws (including the Indian DPDP Act, and GDPR for EU
          visitors). Contact us to exercise these rights.
        </p>

        <b className="text-gray-800">Children</b>
        <p>
          Our site is not intended for children under 13. We do not knowingly
          collect personal information from children.
        </p>

        <b className="text-gray-800">Updates To This Policy</b>
        <p>
          We may update this policy to reflect changes in our practices or
          legal requirements. The latest version will always be available on
          this page.
        </p>

        <b className="text-gray-800">Contact Us</b>
        <p>
          Questions or requests? Reach us at
          <span className="font-medium"> contact@augustsage.com</span> or
          <span className="font-medium"> +91-73488 47198</span>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
