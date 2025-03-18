import Head from "next/head";
import styles from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>
      <Head>
        <title>Raido Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy for Raido's services"
        />
      </Head>
      <main className={styles.privacyMain}>
        <h1>Raido Privacy Policy</h1>
        <p>
          At Raido, we are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and safeguard your personal
          information when you use our ride-hailing services via our mobile app
          and website.
        </p>
        <p>
          By using Raido's services, you agree to the collection and use of your
          information in accordance with this policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect various types of information to provide and improve our
          services for you.
        </p>

        <h3>Personal Information</h3>
        <ul>
          <li>
            <strong>Contact Information:</strong> Name, email address, phone
            number.
          </li>
          <li>
            <strong>Identification Information:</strong> Driver’s license,
            government ID (for drivers).
          </li>
          <li>
            <strong>Payment Information:</strong> Credit/debit card details,
            billing address.
          </li>
        </ul>

        <h3>Usage Data</h3>
        <ul>
          <li>
            <strong>Ride Information:</strong> Pickup and drop-off locations,
            date and time of rides, fare details.
          </li>
          <li>
            <strong>Device Information:</strong> IP address, browser type,
            device type, operating system.
          </li>
          <li>
            <strong>Location Data:</strong> Real-time location information from
            your device while using the app.
          </li>
        </ul>

        <h3>App Tracking Transparency (ATT) & Apple Privacy Compliance</h3>
        <p>
          In compliance with Apple's App Tracking Transparency (ATT) framework,
          Raido may request permission to track your activity across other apps
          and websites. This helps us deliver personalized services and offers.
        </p>
        <ul>
          <li>
            <strong>If you grant permission:</strong> We may collect usage data
            for marketing and analytics.
          </li>
          <li>
            <strong>If you deny permission:</strong> Your data will not be
            shared for tracking across third-party apps.
          </li>
        </ul>
        <p>
          You can change your tracking preferences anytime in your device
          settings under <strong>Privacy &gt; Tracking</strong>.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>
            <strong>To Provide and Maintain Our Services:</strong> Manage
            bookings, process payments, and provide customer support.
          </li>
          <li>
            <strong>To Improve Our Services:</strong> Analyze usage patterns and
            enhance app functionality.
          </li>
          <li>
            <strong>To Communicate With You:</strong> Send updates, promotional
            offers, and important service information.
          </li>
          <li>
            <strong>To Ensure Safety and Security:</strong> Monitor and enhance
            the safety of drivers and passengers.
          </li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties.
          However, we may share your information in the following circumstances:
        </p>
        <ul>
          <li>
            <strong>With Service Providers:</strong> Third-party vendors that
            help us operate our services (e.g., payment processors).
          </li>
          <li>
            <strong>For Legal Reasons:</strong> To comply with laws, legal
            processes, or government requests.
          </li>
          <li>
            <strong>To Protect Rights and Safety:</strong> To protect Raido, its
            users, or the public from fraud, security threats, or harm.
          </li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your
          personal information from unauthorized access, alteration, disclosure,
          or destruction.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required by law.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of the personal information
            we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> Request corrections to inaccurate or
            incomplete data.
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your personal
            information under certain conditions.
          </li>
          <li>
            <strong>Objection:</strong> Object to the processing of your
            personal information.
          </li>
          <li>
            <strong>Portability:</strong> Request transfer of your personal
            information to another entity.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us using the details provided
          below.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on our website and within the app. We recommend reviewing
          this policy periodically.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <ul>
          <li>
            <strong>Phone:</strong> +91 8667728057
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:admin@raidotaxi.com">admin@raidotaxi.com</a>
          </li>
        </ul>

        <p>
          By using Raido's services, you acknowledge that you have read,
          understood, and agree to be bound by this Privacy Policy.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
