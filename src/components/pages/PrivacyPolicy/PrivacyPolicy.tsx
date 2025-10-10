import { Box, Heading, Text } from 'grommet'
import { Layout } from '../../templates'

const PrivacyPolicy = () => (
  <Layout>
    <Box pad="large" background="white">
      <Heading level={2} color="black" margin={{ top: 'medium' }}>
        Pomodorino Mobile Application Privacy Policy
      </Heading>
      <Text color="black" margin={{ bottom: 'medium' }}>
        This privacy policy is applicable to the Pomodorino app (hereinafter
        referred to as "Application") for mobile devices, which was developed by
        William Oliveira de Lagos (hereinafter referred to as "Service
        Provider") as a Free service. This service is provided "AS IS".
      </Text>

      <Heading level={3} color="black">
        What information does the Application obtain and how is it used?
      </Heading>

      <Heading level={4} color="black">
        User Provided Information
      </Heading>
      <Text color="black" margin={{ bottom: 'medium' }}>
        The Application acquires the information you supply when you download
        and register the Application. Registration with the Service Provider is
        not mandatory. However, bear in mind that you might not be able to
        utilize some of the features offered by the Application unless you
        register with them.
      </Text>
      <Text color="black" margin={{ bottom: 'medium' }}>
        The Service Provider may also use the information you provided them to
        contact you from time to time to provide you with important information,
        required notices and marketing promotions.
      </Text>

      <Heading level={4} color="black">
        Automatically Collected Information
      </Heading>
      <Text color="black" margin={{ bottom: 'medium' }}>
        In addition, the Application may collect certain information
        automatically, including, but not limited to, the type of mobile device
        you use, your mobile device's unique device ID, the IP address of your
        mobile device, your mobile operating system, the type of mobile Internet
        browsers you use, and information about the way you use the Application.
      </Text>

      <Heading level={3} color="black">
        Does the Application collect precise real time location information of
        the device?
      </Heading>
      <Text color="black" margin={{ bottom: 'medium' }}>
        This Application does not gather precise information about the location
        of your mobile device.
      </Text>

      <Heading level={3} color="black">
        Do third parties see and/or have access to information obtained by the
        Application?
      </Heading>
      <Text color="black" margin={{ bottom: 'medium' }}>
        Only aggregated, anonymized data is periodically transmitted to external
        services to aid the Service Provider in improving the Application and
        their service. The Service Provider may share your information with
        third parties in the ways that are described in this privacy statement.
      </Text>
      <Text color="black" margin={{ bottom: 'small' }}>
        The Service Provider may disclose User Provided and Automatically
        Collected Information:
      </Text>
      <Box margin={{ left: 'medium', bottom: 'medium' }}>
        <Text color="black">
          • as required by law, such as to comply with a subpoena, or similar
          legal process;
        </Text>
        <Text color="black">
          • when they believe in good faith that disclosure is necessary to
          protect their rights, protect your safety or the safety of others,
          investigate fraud, or respond to a government request;
        </Text>
        <Text color="black">
          • with their trusted services providers who work on their behalf, do
          not have an independent use of the information we disclose to them,
          and have agreed to adhere to the rules set forth in this privacy
          statement.
        </Text>
      </Box>

      <Heading level={3} color="black">
        What are my opt-out rights?
      </Heading>
      <Text color="black" margin={{ bottom: 'medium' }}>
        You can halt all collection of information by the Application easily by
        uninstalling the Application. You may use the standard uninstall
        processes as may be available as part of your mobile device or via the
        mobile application marketplace or network.
      </Text>

      <Heading level={3} color="black">
        Data Retention Policy, Managing Your Information
      </Heading>
      <Text color="black" margin={{ bottom: 'medium' }}>
        The Service Provider will retain User Provided data for as long as you
        use the Application and for a reasonable time thereafter. The Service
        Provider will retain Automatically Collected information for up to 24
        months and thereafter may store it in aggregate. If you'd like the
        Service Provider to delete User Provided Data that you have provided via
        the Application, please contact them at william.lagos@icloud.com and we
        will respond in a reasonable time. Please note that some or all of the
        User Provided Data may be required in order for the Application to
        function properly.
      </Text>

      <Heading level={3} color="black">
        Children
      </Heading>
      <Text color="black" margin={{ bottom: 'medium' }}>
        The Service Provider does not use the Application to knowingly solicit
        data from or market to children under the age of 13.
      </Text>
      <Text color="black" margin={{ bottom: 'medium' }}>
        The Service Provider does not knowingly collect personally identifiable
        information from children. The Service Provider encourages all children
        to never submit any personally identifiable information through the
        Application and/or Services. The Service Provider encourage parents and
        legal guardians to monitor their children's Internet usage and to help
        enforce this Policy by instructing their children never to provide
        personally identifiable information through the Application and/or
        Services without their permission. If you have reason to believe that a
        child has provided personally identifiable information to the Service
        Provider through the Application and/or Services, please contact the
        Service Provider (william.lagos@icloud.com) so that they will be able to
        take the necessary actions. You must also be at least 16 years of age to
        consent to the processing of your personally identifiable information in
        your country (in some countries we may allow your parent or guardian to
        do so on your behalf).
      </Text>

      <Heading level={3} color="black">
        Security
      </Heading>
      <Text color="black" margin={{ bottom: 'medium' }}>
        The Service Provider are concerned about safeguarding the
        confidentiality of your information. The Service Provider provide
        physical, electronic, and procedural safeguards to protect information
        we process and maintain. For example, we limit access to this
        information to authorized employees and contractors who need to know
        that information in order to operate, develop or improve their
        Application. Please be aware that, although we endeavor provide
        reasonable security for information we process and maintain, no security
        system can prevent all potential security breaches.
      </Text>

      <Heading level={3} color="black">
        Changes
      </Heading>
      <Text color="black" margin={{ bottom: 'medium' }}>
        This Privacy Policy may be updated from time to time for any reason. The
        Service Provider will notify you of any changes to the Privacy Policy by
        updating this page with the new Privacy Policy. You are advised to
        consult this Privacy Policy regularly for any changes, as continued use
        is deemed approval of all changes.
      </Text>
      <Text color="black" margin={{ bottom: 'medium' }}>
        This privacy policy is effective as of 2025-10-10
      </Text>

      <Heading level={3} color="black">
        Your Consent
      </Heading>
      <Text color="black" margin={{ bottom: 'medium' }}>
        By using the Application, you are giving your consent to the Service
        Provider processing of your information as set forth in this Privacy
        Policy now and as amended by us. "Processing," means using cookies on a
        computer/hand held device or using or touching information in any way,
        including, but not limited to, collecting, storing, deleting, using,
        combining and disclosing information.
      </Text>
    </Box>
  </Layout>
)

export default PrivacyPolicy
