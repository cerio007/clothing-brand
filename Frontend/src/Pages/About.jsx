import React, { useEffect, useState } from 'react';
import API from '../Api/axions';

const AboutPage = () => {
  const [aboutText, setAboutText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const { data } = await API.get('/settings');
        setAboutText(data.aboutText);
      } catch (err) {
        console.error("Could not load About text");
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-serif mb-8 text-center uppercase tracking-widest">Our Legacy</h2>
      <div className="prose lg:prose-xl text-gray-700 leading-relaxed text-center">
        <p className="whitespace-pre-wrap">
          {aboutText || "Signature Threads is dedicated to premium African craftsmanship."}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;