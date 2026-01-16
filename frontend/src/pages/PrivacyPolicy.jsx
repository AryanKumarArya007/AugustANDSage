import React from "react";
import Title from "../components/Title";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-transparent">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-2xl text-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <Title text1={"PRIVACY"} text2={"POLICY"} />
        </div>

        <div className="my-10">
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg border border-gray-200 dark:border-neutral-700 p-6 sm:p-8">
            <div className="flex flex-col space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                At August &amp; Sage ("we", "us", "our"), your privacy matters.
                This Privacy Policy explains what data we collect, why we collect it,
                and how we use, store, and protect it when you use our website,
                purchase products, or interact with our services.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Information We Collect</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium text-gray-800 dark:text-gray-100">Account &amp; Contact Details:</span>
                  {' '}Name, email, phone number, shipping/billing addresses.
                </li>
                <li>
                  <span className="font-medium text-gray-800 dark:text-gray-100">Order &amp; Transaction Data:</span>
                  {' '}Products purchased, order IDs, delivery status, and payment confirmations
                  processed securely via our payment partners. We do not store full
                  card details on our servers.
                </li>
                <li>
                  <span className="font-medium text-gray-800 dark:text-gray-100">Usage &amp; Device Data:</span>
                  {' '}Pages visited, search queries, approximate location, browser/device
                  information, and cookies to keep your session signed in and improve
                  site experience.
                </li>
                <li>
                  <span className="font-medium text-gray-800 dark:text-gray-100">Support &amp; Communication:</span>
                  {' '}Messages you send to our team (email, chat, forms) and feedback.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and deliver your orders, and provide customer support.</li>
                <li>Authenticate accounts, prevent fraud, and ensure platform security.</li>
                <li>Improve our catalog, search, and website performance.</li>
                <li>Send service updates (order status, delivery notifications).</li>
                <li>
                  With consent, send curated offers and newsletters — you can opt out
                  anytime.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Cookies &amp; Similar Technologies</h3>
              <p>
                We use cookies to keep you signed in, remember preferences, and
                measure site performance. You can control cookies from your browser
                settings; disabling essential cookies may affect site functionality.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Sharing Your Information</h3>
              <p>
                We do not sell your personal data. We share necessary information with
                trusted providers to run our business, including payment processors,
                logistics/shipping partners, analytics and security tools. These
                partners process data only to deliver their services and are bound by
                confidentiality and data protection obligations.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Data Security &amp; Retention</h3>
              <p>
                We apply reasonable technical and organizational measures to protect
                your data. Order records may be retained for legal, accounting, and
                fraud prevention purposes. We retain other data only as long as needed
                for the purposes described in this policy.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Your Rights</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, correct, or delete certain personal information.</li>
                <li>Opt out of marketing communications.</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
              <p>
                Depending on your location, you may have additional rights under
                applicable laws (including the Indian DPDP Act, and GDPR for EU
                visitors). Contact us to exercise these rights.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Children</h3>
              <p>
                Our site is not intended for children under 13. We do not knowingly
                collect personal information from children.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Updates To This Policy</h3>
              <p>
                We may update this policy to reflect changes in our practices or
                legal requirements. The latest version will always be available on
                this page.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Contact Us</h3>
              <p>
                Questions or requests? Reach us at
                <span className="font-medium dark:text-gray-100"> contact@augustsage.com</span> or
                <span className="font-medium dark:text-gray-100"> +91-73488 47198</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
