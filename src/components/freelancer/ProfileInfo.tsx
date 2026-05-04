interface ProfileInfoProps {
  profile: any
  onEdit: () => void
}

export function ProfileInfo({ profile, onEdit }: ProfileInfoProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-['Cormorant_Garamond']">Profile</h2>
        <button
          onClick={onEdit}
          className="text-[#44A194] hover:text-[#3a8f82] text-sm"
        >
          Edit Profile
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs uppercase tracking-wider text-[#8a8a82] font-medium">
            Full Name
          </label>
          <p className="mt-1 text-lg text-[#1C2321]">{profile.name}</p>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-[#8a8a82] font-medium">
            Role
          </label>
          <p className="mt-1 text-[#3a3a36]">{profile.role}</p>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-[#8a8a82] font-medium">
            Experience
          </label>
          <p className="mt-1 text-[#3a3a36]">{profile.experience} years</p>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-[#8a8a82] font-medium">
            Skills
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {profile.skills?.map((skill: string) => (
              <span key={skill} className="px-2 py-1 bg-gray-100 text-[#3a3a36] rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-[#8a8a82] font-medium">
            Bio
          </label>
          <p className="mt-1 text-[#3a3a36] text-sm leading-relaxed">{profile.bio}</p>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-[#8a8a82] font-medium">
            Email
          </label>
          <p className="mt-1 text-[#3a3a36]">{profile.email}</p>
        </div>
      </div>
    </div>
  )
}