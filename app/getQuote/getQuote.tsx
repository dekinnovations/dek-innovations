'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../../components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

interface AdditionalInfo {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  ideaName?: string;
  currentWebsite?: string;
  currentFacebookPage?: string;
  monthlyIncome?: string;
  marketingStruggle?: string;
  problems?: string;
  wants?: string;
  platform?: string;
  design?: string;
}

export default function GetQuote() {
  const [projectType, setProjectType] = useState<string>('');
  const [businessStage, setBusinessStage] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<AdditionalInfo>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    ideaName: '',
    currentWebsite: '',
    currentFacebookPage: '',
    monthlyIncome: '',
    marketingStruggle: '',
    problems: '',
    wants: '',
    platform: '',
    design: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAdditionalInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate sending data here, replace with your actual logic

    setProjectType('');
    setBusinessStage('');
    setAdditionalInfo({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      ideaName: '',
      currentWebsite: '',
      currentFacebookPage: '',
      monthlyIncome: '',
      marketingStruggle: '',
      problems: '',
      wants: '',
      platform: '',
      design: '',
    });

    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-center p-12">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl font-bold mt-40">
          Get a Quote
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-xl mt-4 mb-40">
          Tell us about your project to help us understand your needs and provide you with a tailored solution.
        </motion.p>
      </div>

      {/* Quote Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <label htmlFor="projectType">Is this a website or a web application?</label>
            <select
              name="projectType"
              id="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            >
              <option value="">Select one</option>
              <option value="website">Website</option>
              <option value="webapp">Web Application</option>
              <option value="socialMediaMarketing">Social Media Marketing</option>
            </select>

            {projectType && projectType !== 'socialMediaMarketing' && (
              <>
                <label htmlFor="businessStage">Is this for a current business or a new idea?</label>
                <select
                  name="businessStage"
                  id="businessStage"
                  value={businessStage}
                  onChange={(e) => setBusinessStage(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                >
                  <option value="">Select one</option>
                  <option value="currentBusiness">Current Business</option>
                  <option value="newIdea">New Idea</option>
                </select>
              </>
            )}

            {/* Conditional Fields based on the selections */}
            {projectType === 'website' && businessStage === 'currentBusiness' && (
              <>
                <input type="text" name="name" placeholder="Your Name" value={additionalInfo.name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="email" name="email" placeholder="Your Email" value={additionalInfo.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="tel" name="phone" placeholder="Your Phone Number" value={additionalInfo.phone} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="businessName" placeholder="Business Name" value={additionalInfo.businessName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="currentWebsite" placeholder="Current Website URL" value={additionalInfo.currentWebsite} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <textarea name="problems" placeholder="Problems with the current site" value={additionalInfo.problems} onChange={handleInputChange} className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none"></textarea>
                <textarea name="wants" placeholder="Desired features or changes for the new site" value={additionalInfo.wants} onChange={handleInputChange} className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none"></textarea>
                <input type="text" name="platform" placeholder="Preferred platform (WordPress, Wix, etc.)" value={additionalInfo.platform} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="design" placeholder="Do you have a design or need one created?" value={additionalInfo.design} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
              </>
            )}

            {projectType === 'website' && businessStage === 'newIdea' && (
              <>
                <input type="text" name="name" placeholder="Your Name" value={additionalInfo.name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="email" name="email" placeholder="Your Email" value={additionalInfo.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="tel" name="phone" placeholder="Your Phone Number" value={additionalInfo.phone} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="ideaName" placeholder="Idea Name" value={additionalInfo.ideaName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <textarea name="ideaDescription" placeholder="Describe your website idea" value={additionalInfo.ideaName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="design" placeholder="Do you have a design or need one created?" value={additionalInfo.design} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
              </>
            )}

            {projectType === 'webapp' && businessStage === 'currentBusiness' && (
              <>
                <input type="text" name="name" placeholder="Your Name" value={additionalInfo.name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="email" name="email" placeholder="Your Email" value={additionalInfo.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="tel" name="phone" placeholder="Your Phone Number" value={additionalInfo.phone} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="businessName" placeholder="Business Name" value={additionalInfo.businessName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="currentWebsite" placeholder="Current Website URL" value={additionalInfo.currentWebsite} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <textarea name="problems" placeholder="Problem Web App would solve" value={additionalInfo.problems} onChange={handleInputChange} className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none"></textarea>
                <input type="text" name="platform" placeholder="Preferred platform (WordPress, Wix, etc.)" value={additionalInfo.platform} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="design" placeholder="Do you have a design or need one created?" value={additionalInfo.design} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
              </>
            )}

            {projectType === 'webapp' && businessStage === 'newIdea' && (
              <>
                <input type="text" name="name" placeholder="Your Name" value={additionalInfo.name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="email" name="email" placeholder="Your Email" value={additionalInfo.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="tel" name="phone" placeholder="Your Phone Number" value={additionalInfo.phone} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="ideaName" placeholder="Idea Name" value={additionalInfo.ideaName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <textarea name="ideaDescription" placeholder="Describe your webapp idea" value={additionalInfo.ideaName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="design" placeholder="Do you have a design or need one created?" value={additionalInfo.design} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
              </>
            )}

            {projectType === 'socialMediaMarketing' && (
              <>
                <input type="text" name="name" placeholder="Your Name" value={additionalInfo.name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="email" name="email" placeholder="Your Email" value={additionalInfo.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="tel" name="phone" placeholder="Your Phone Number" value={additionalInfo.phone} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="businessName" placeholder="Business Name" value={additionalInfo.businessName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="currentWebsite" placeholder="Current Website URL (if any)" value={additionalInfo.currentWebsite} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="currentFacebookPage" placeholder="Current Facebook Page URL (if any)" value={additionalInfo.currentFacebookPage} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <input type="text" name="monthlyIncome" placeholder="Rough Estimate of Current Monthly Income" value={additionalInfo.monthlyIncome} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" />
                <textarea name="marketingStruggle" placeholder="Current Marketing Struggle" value={additionalInfo.marketingStruggle} onChange={handleInputChange} className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none"></textarea>
              </>
            )}

            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-blue-600">Submit</button>
            </form>
          {submitted && <p className="text-red-500 text-center mt-4">Sorry, there has been an error. Please email dylan@dekinnovations.com if you continue to have trouble. We apologize. </p>}
        </div>
      </div>

      <Footer />
    </>
  );
}
