import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, Phone, MapPin, Package, Truck } from "lucide-react";
import { Link } from "react-router"; // ✅ should be 'react-router-dom' not 'react-router'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRegisterMutation } from "@/redux/Features/auth/auth.api";
import { toast } from "sonner";

// ✅ Zod Schema Validation
const formSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(500, { message: "Name too long (max 500 characters)" }),

    email: z.string().email({ message: "Invalid email address" }),

    phone: z
      .string()
      .regex(/^(?:\+88|88)?01[3-9]\d{8}$/, {
        message:
          "Invalid Bangladeshi phone number. Example: 017xxxxxxxx or +88017xxxxxxxx",
      })
      .optional(),

    address: z
      .string()
      .max(300, { message: "Address too long (max 300 characters)" })
      .optional(),

    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      }),

    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

export default function SignUpPage() {
  const [userType, setUserType] = useState<"sender" | "receiver">("sender");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ✅ Rename mutation function to avoid conflict
  const [registerUser] = useRegisterMutation();

  // ✅ React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const result = await registerUser(data).unwrap();
      console.log("Registration successful:", result);
 toast("user create successfully")
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };
  return (
    <div className="flex h-[90vh]">
      {/* Left Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-8 bg-white h-full overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-3">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">Create Account</h1>
            <p className="text-gray-600">Join us for fast & reliable delivery</p>
          </div>

          {/* User Type Selection */}
          <div className="mb-3">
            <label className="block text-sm font-semibold mb-2 text-gray-800">I want to register as:</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserType("sender")}
                className={`p-3 border-2 rounded-lg transition-all ${
                  userType === "sender"
                    ? "border-[#f5a623] bg-[#f5a623]/10"
                    : "border-gray-300 hover:border-[#f5a623]/50"
                }`}
              >
                <Package
                  size={26}
                  className="mx-auto mb-1"
                  style={{ color: userType === "sender" ? "#f5a623" : "#6b7280" }}
                />
                <p
                  className="font-semibold text-xs"
                  style={{ color: userType === "sender" ? "#f5a623" : "#2c2c2c" }}
                >
                  Sender
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">Send parcels</p>
              </button>

              <button
                type="button"
                onClick={() => setUserType("receiver")}
                className={`p-3 border-2 rounded-lg transition-all ${
                  userType === "receiver"
                    ? "border-[#f5a623] bg-[#f5a623]/10"
                    : "border-gray-300 hover:border-[#f5a623]/50"
                }`}
              >
                <Truck
                  size={26}
                  className="mx-auto mb-1"
                  style={{ color: userType === "receiver" ? "#f5a623" : "#6b7280" }}
                />
                <p
                  className="font-semibold text-xs"
                  style={{ color: userType === "receiver" ? "#f5a623" : "#2c2c2c" }}
                >
                  Receiver
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">Receive parcels</p>
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div>
            <label className="block text-xs font-semibold mb-1.5 text-gray-800">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                {...register("name")}
                placeholder="Enter your full name"
                className="w-full pl-9 pr-3 py-2 border-2 rounded-md text-sm focus:border-[#f5a623] outline-none"
              />
            </div>
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5 text-gray-800">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                {...register("email")}
                placeholder="Enter your email"
                className="w-full pl-9 pr-3 py-2 border-2 rounded-md text-sm focus:border-[#f5a623] outline-none"
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5 text-gray-800">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                {...register("phone")}
                placeholder="Enter your phone number"
                className="w-full pl-9 pr-3 py-2 border-2 rounded-md text-sm focus:border-[#f5a623] outline-none"
              />
            </div>
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5 text-gray-800">Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={16} />
              <textarea
                {...register("address")}
                placeholder="Enter your address"
                rows={2}
                className="w-full pl-9 pr-3 py-2 border-2 rounded-md text-sm focus:border-[#f5a623] outline-none resize-none"
              />
            </div>
            {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold mb-1.5 text-gray-800">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Create a password"
                className="w-full pl-9 pr-9 py-2 border-2 rounded-md text-sm focus:border-[#f5a623] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#f5a623]"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-semibold mb-1.5 text-gray-800">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                placeholder="Confirm your password"
                className="w-full pl-9 pr-9 py-2 border-2 rounded-md text-sm focus:border-[#f5a623] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#f5a623]"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start gap-1 pt-1">
            <input
              type="checkbox"
              {...register("agreeToTerms", { value: false })}
              className="w-4 h-4 mt-0.5 rounded border-gray-300 text-[#f5a623] focus:ring-[#f5a623]"
            />
            <label className="text-xs text-gray-600">
              I agree to the{" "}
              <Link to="/terms" className="font-semibold hover:underline text-[#f5a623]">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="font-semibold hover:underline text-[#f5a623]">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-xs text-red-500 mt-1">{errors.agreeToTerms.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-md font-semibold text-white hover:opacity-90 transition-all hover:scale-[1.02] shadow-md text-sm"
            style={{ backgroundColor: "#f5a623" }}
          >
            Create Account
          </button>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to={"/signin"}>
          <span
            className="text-[#f5a623] hover:underline cursor-pointer"
          
          >
            Please Login
          </span>
          </Link>
        </p>
        </form>
      </div>

      {/* Right Section */}
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{ backgroundColor: "#2c2c2c" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c2c2c]/90 to-[#f5a623]/30"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-md">
            Whether you're sending or receiving, we've got you covered with our reliable delivery
            network.
          </p>
        </div>
      </div>
    </div>
  )
}
