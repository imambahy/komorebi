'use client';

import React, { useEffect, useState } from 'react';
import { TeamMember } from '@/types';
import { getTeamMembers } from '@/lib/services';

const TeamsSection = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await getTeamMembers();
        setTeam(data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div id="teams" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#003566' }}>
            Our Teams
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the people behind our success.
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: '#FFC300' }}></div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.objectId} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4"
                  style={{ borderColor: '#FFC300' }}
                  onError={e => (e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name))}
                />
                <h3 className="text-lg font-semibold" style={{ color: '#003566' }}>{member.name}</h3>
                <p className="text-sm text-[#FFC300] font-medium">{member.position}</p>
                <p className="text-gray-600 text-sm mt-2 text-center">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[#003566] hover:text-[#FFC300] text-sm underline"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamsSection;