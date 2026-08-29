import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_DATA } from '../../data/portfolioData';

export const AboutBento: React.FC = () => {
  return (
    <div className="flex flex-col h-full z-10">
      <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">About Me</h3>
      
      <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
        {ABOUT_DATA.bio}
      </p>

      <div className="space-y-3 mt-auto">
        <div className="flex items-center text-sm text-slate-600">
          <MapPin className="w-4 h-4 mr-3 text-purple-500" />
          <span>{PERSONAL_INFO.location}</span>
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <Mail className="w-4 h-4 mr-3 text-purple-500" />
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-purple-600 transition-colors">
            {PERSONAL_INFO.email}
          </a>
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <Phone className="w-4 h-4 mr-3 text-purple-500" />
          <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-purple-600 transition-colors">
            {PERSONAL_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
