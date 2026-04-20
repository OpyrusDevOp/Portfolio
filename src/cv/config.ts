export interface CVProfile {
  id: string;
  label: { fr: string; en: string };
  files: {
    fr?: string;
    en?: string;
  };
}

// Naming convention: CV_[FirstName]_[LastName]_[Profile]_[Lang].pdf
// Drop the PDF in public/cv/ and add an entry below to register a new profile.
export const cvProfiles: CVProfile[] = [
  {
    id: 'dotnet',
    label: { fr: 'Développeur .NET', en: '.NET Developer' },
    files: {
      fr: 'CV_Yves_Bidja_Bissa_DotNet_FR.pdf',
      en: 'CV_Yves_Bidja_Bissa_DotNet_EN.pdf',
    },
  },
  {
    id: 'csharpTs',
    label: { fr: 'Développeur C# / TypeScript', en: 'C# / TypeScript Developer' },
    files: {
      fr: 'CV_Yves_Bidja_Bissa_CSharpTS_FR.pdf',
    },
  },
  {
    id: 'typescript',
    label: { fr: 'Développeur TypeScript', en: 'TypeScript Developer' },
    files: {
      fr: 'CV_Yves_Bidja_Bissa_TypeScript_FR.pdf',
      en: 'CV_Yves_Bidja_Bissa_TypeScript_EN.pdf',
    },
  },
];
