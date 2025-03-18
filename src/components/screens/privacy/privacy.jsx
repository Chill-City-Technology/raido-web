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
          At Raido, we value your privacy and transparency. This Privacy Policy
          explains how we collect, use, and safeguard your personal information
          while using our ride-hailing services via our mobile app and website.
        </p>
        <p>
          By using Raido's services, you consent to the collection and use of
          your data as described in this policy.
        </p>

        <h2>1. Information We Collect & Why We Need It</h2>
        <p>
          To provide a seamless ride-hailing experience, Raido may request
          access to the following:
        </p>

        <h3>Location Data (GPS Access) - Required</h3>
        <ul>
          <li>
            <strong>Purpose:</strong> To enable ride requests, find nearby
            drivers, and provide accurate pickup/drop-off locations.
          </li>
          <li>
            <strong>Example:</strong> Your location helps us show available
            drivers near you and optimize route navigation for efficiency.
          </li>
          <li>
            <strong>User Control:</strong> You can enable/disable location
            access via{" "}
            <strong>Settings &gt; Privacy &gt; Location Services</strong> on
            your device.
          </li>
        </ul>

        <h3>Contacts Access (If Requested) - Optional</h3>
        <ul>
          <li>
            <strong>Purpose:</strong> To allow users to share ride details with
            trusted contacts for safety.
          </li>
          <li>
            <strong>Example:</strong> If you use the “Share Ride” feature, we
            access your contacts to send live ride status updates.
          </li>
          <li>
            <strong>User Control:</strong> You can grant or deny access via{" "}
            <strong>Settings &gt; Privacy &gt; Contacts</strong> on your device.
          </li>
        </ul>

        <h3>Microphone Access (If Requested) - Optional</h3>
        <ul>
          <li>
            <strong>Purpose:</strong> To enable hands-free voice features for
            ride booking and customer support (if applicable).
          </li>
          <li>
            <strong>Example:</strong> If you use voice commands to book a ride
            or contact support, microphone access is required.
          </li>
          <li>
            <strong>User Control:</strong> You can enable/disable microphone
            access via <strong>Settings &gt; Privacy &gt; Microphone</strong> on
            your device.
          </li>
        </ul>

        <h3>Other Data We Collect</h3>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, phone number, email
            (for account creation and support).
          </li>
          <li>
            <strong>Ride Information:</strong> Pickup/drop-off details, ride
            history, fare details (for trip management).
          </li>
          <li>
            <strong>Device Information:</strong> IP address, device type, and
            operating system (for performance improvement).
          </li>
        </ul>

        <h2>2. App Tracking Transparency (ATT) - Apple Compliance</h2>
        <p>
          In compliance with Apple’s App Tracking Transparency (ATT) policy,
          Raido may request permission to track your activity across other apps
          and websites.
        </p>
        <ul>
          <li>
            <strong>Why We Ask:</strong> To provide relevant promotions,
            personalized recommendations, and app improvements.
          </li>
          <li>
            <strong>Your Choice:</strong> You can allow or deny tracking when
            prompted, or manage it via{" "}
            <strong>Settings &gt; Privacy &gt; Tracking</strong> on your device.
          </li>
          <li>
            <strong>No Impact on Service:</strong> Denying tracking will not
            affect your ability to book rides.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>
            <strong>Provide & Maintain Services:</strong> Process ride requests,
            payments, and ensure a smooth experience.
          </li>
          <li>
            <strong>Enhance Safety & Security:</strong> Verify identity, prevent
            fraud, and track rides for passenger and driver safety.
          </li>
          <li>
            <strong>Communicate With You:</strong> Send ride updates,
            promotions, and important notifications.
          </li>
          <li>
            <strong>Improve App Performance:</strong> Analyze usage patterns to
            enhance app functionality and efficiency.
          </li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>
          Raido does not sell personal data. Your information may be shared in
          limited cases:
        </p>
        <ul>
          <li>
            <strong>With Trusted Service Providers:</strong> Payment processors,
            mapping services, and customer support teams.
          </li>
          <li>
            <strong>For Legal Reasons:</strong> If required by law enforcement
            or government agencies.
          </li>
          <li>
            <strong>To Ensure Safety:</strong> If necessary to prevent fraud,
            security threats, or harm.
          </li>
        </ul>

        <h2>5. Data Security & Retention</h2>
        <p>
          We use industry-standard security measures to protect your personal
          data.
        </p>
        <p>
          <strong>Data Retention:</strong> We keep your data only as long as
          needed for legal, regulatory, and operational purposes.
        </p>
        <p>
          <strong>User Control:</strong> You can request data deletion by
          contacting our support team.
        </p>

        <h2>6. Your Rights & Choices</h2>
        <p>You have the right to:</p>
        <ul>
          <li>
            <strong>Access & Update Your Data</strong> via the app settings.
          </li>
          <li>
            <strong>Control Permissions</strong> for location, contacts,
            microphone, and tracking via your device settings.
          </li>
          <li>
            <strong>Request Data Deletion</strong> if you no longer want to use
            Raido’s services.
          </li>
        </ul>

        <p>For privacy-related requests, contact us at:</p>
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
          By using Raido, you acknowledge that you have read, understood, and
          agree to this Privacy Policy.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
