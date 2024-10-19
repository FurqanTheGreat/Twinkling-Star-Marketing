'use client';

import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase'; // Import Firebase config
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@heroicons/react/solid";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
  } from "../../components/ui/animated-modal";
  import Image from "next/image";
  import { motion } from "framer-motion";
  import { database, ref, set } from "@/lib/firebase";
  import { SparklesCore } from "@/components/ui/sparkles";
  import { Textarea } from "@/components/ui/textarea"

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  function writeUserData(name: any, email: any, lastname: any) {
    set(ref(database, 'users/' + name), {
      name: name,
      email: email,
      lastname: lastname
    });
  }

  const handleSignUp = async () => {
    setError(null); // Clear previous errors
    setSuccess(null); // Clear previous success messages

    try {
      setSuccess('Inquiry Sent successfully: ' + name);
      writeUserData(name, email, lastname)
    } catch (err: any) {
      setError(err.message); // Set error message if sign-up fails
    }
  };

  return (
    <div className="flex items-center justify-center">
        <Modal>
        <ModalTrigger className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-light text-white mx-auto text-center rounded-full relative mt-4 flex justify-center group/modal-btn text-[20px] ">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book Now
          </span>
          <div className="absolute inset-x-0 text-white h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center text-white justify-center absolute inset-0 transition duration-500 text-white z-20">
          <ArrowRightIcon className="w-5 h-5 ml-2" />
          </div>
        </ModalTrigger>
        <ModalBody>
            <ModalContent>
      <h2 className="text-white font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Booking Details
      </h2>
      <form className="my-8 text-semibold">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-white">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" onChange={(e) => setName(e.target.value)} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-white">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" onChange={(e) => setLastname(e.target.value)}/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white">Email Address</Label>
          <Input
        type="email"
        id='email'
        placeholder="user.example@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
        className='text-medium'
        required
      />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-white">Password</Label>
          <Input
        type="text"
        placeholder="Your Inquiry"
        id='password'
        onChange={(e) => setPassword(e.target.value)}
        className='text-medium'
        required
      />
        </LabelInputContainer>
        </form>

        <button
          className="text-[18px] bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          onClick={handleSignUp}
        >
          Send Inquiry &rarr;
          <BottomGradient />
        </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

            </ModalContent>
        </ModalBody>
        </Modal>
    </div>
  );
};
const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };

export default SignUp;
