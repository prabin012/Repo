import { CheckCircle, Copy, Mail, Phone } from "lucide-react";
const Account = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    verified: true,
    profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
  };
  const { name, email, phone, verified, profilePic } = user;

  const copyToClipboard = (text: any) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied!`);
  };
  return (
    <div>
      <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden p-6 space-y-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center">
          <img
            src={profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {name}
          </h2>
          <div className="flex justify-center items-center gap-2 text-sm">
            <span
              className={`${
                verified ? "text-green-600" : "text-gray-400"
              } flex items-center gap-1`}
            >
              {verified ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Verified
                </>
              ) : (
                "Not Verified"
              )}
            </span>
          </div>
        </div>

        <div className="text-gray-700 dark:text-gray-300 space-y-2">
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md">
            <span className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500" />
              {email}
            </span>
            <button onClick={() => copyToClipboard(email)}>
              <Copy className="w-4 h-4 text-gray-500 hover:text-gray-700 dark:hover:text-white" />
            </button>
          </div>

          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md">
            <span className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-500" />
              {phone}
            </span>
            <button onClick={() => copyToClipboard(phone)}>
              <Copy className="w-4 h-4 text-gray-500 hover:text-gray-700 dark:hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
