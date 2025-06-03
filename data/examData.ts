interface Region {
  id: number;
  name: string;
  url: string;
}

interface YearData {
  title: string;
  regions: Region[];
}

export const examData: Record<string, YearData> = {
  '2025': {
    title: 'Grade - 12 Entrance',
    regions: [
      { id: 1, name: 'ရန်ကုန်တိုင်းဒေသကြီး', url: 'https://2024.myanmarexam.org/ygn.html' },
      { id: 2, name: 'မန္တလေးတိုင်းဒေသကြီး', url: 'https://2025.myanmarexam.org/mandalay' },
      { id: 3, name: 'နေပြည်တော်', url: 'https://2025.myanmarexam.org/naypyitaw' },
      { id: 4, name: 'ရှမ်းပြည်နယ်', url: 'https://2025.myanmarexam.org/shan' },
      { id: 5, name: 'စစ်ကိုင်းတိုင်းဒေသကြီး', url: 'https://2025.myanmarexam.org/sagaing' },
      { id: 6, name: 'မကွေးတိုင်းဒေသကြီး', url: 'https://2025.myanmarexam.org/magway' },
      { id: 7, name: 'ပဲခူးတိုင်းဒေသကြီး', url: 'https://2025.myanmarexam.org/bago' },
      { id: 8, name: 'တနင်္သာရီတိုင်းဒေသကြီး', url: 'https://2025.myanmarexam.org/tanintharyi' },
      { id: 9, name: 'ကချင်ပြည်နယ်', url: 'https://2025.myanmarexam.org/kachin' },
      { id: 10, name: 'ကယားပြည်နယ်', url: 'https://2025.myanmarexam.org/kayah' },
      { id: 11, name: 'ကရင်ပြည်နယ်', url: 'https://2025.myanmarexam.org/kayin' },
      { id: 12, name: 'ချင်းပြည်နယ်', url: 'https://2025.myanmarexam.org/chin' },
      { id: 13, name: 'မွန်ပြည်နယ်', url: 'https://2025.myanmarexam.org/mon' },
      { id: 14, name: 'ရခိုင်ပြည်နယ်', url: 'https://2025.myanmarexam.org/rakhine' },
      { id: 15, name: 'ဧရာဝတီတိုင်းဒေသကြီး', url: 'https://2025.myanmarexam.org/ayeyarwady' }
    ]
  },
  '2024': {
    title: 'Result Lists',
    regions: [
      { id: 1, name: 'ရန်ကုန်တိုင်းဒေသကြီး', url: 'https://2024.myanmarexam.org/ygn.html' },

      { id: 2, name: 'မန္တလေးတိုင်းဒေသကြီး', url: 'https://2024.myanmarexam.org/mdy.html' },

      { id: 3, name: 'နေပြည်တော်', url: 'https://2024.myanmarexam.org/npw.html' },

      { id: 4, name: 'ဧရာဝတီတိုင်းဒေသကြီး', url: 'https://2024.myanmarexam.org/ayy.html' },

      { id: 5, name: 'စစ်ကိုင်းတိုင်းဒေသကြီး', url: 'https://2024.myanmarexam.org/sgg.html' },

      { id: 6, name: 'မကွေးတိုင်းဒေသကြီး', url: 'https://2024.myanmarexam.org/mgy.html' },

      { id: 7, name: 'ပဲခူးတိုင်းဒေသကြီး', url: 'https://2024.myanmarexam.org/bgo.html' },

      { id: 8, name: 'တနင်္သာရီတိုင်းဒေသကြီး', url: 'https://2024.myanmarexam.org/tni.html' },

      { id: 9, name: 'ကချင်ပြည်နယ်', url: 'https://2024.myanmarexam.org/kcn.html' },

      { id: 10, name: 'ကယားပြည်နယ်', url: '#' },

      { id: 11, name: 'ကရင်ပြည်နယ်', url: 'https://2024.myanmarexam.org/kyn.html' },

      { id: 12, name: 'ချင်းပြည်နယ်', url: 'https://2024.myanmarexam.org/chn.html' },

      { id: 13, name: 'မွန်ပြည်နယ်', url: 'https://2024.myanmarexam.org/mon.html' },

      { id: 14, name: 'ရခိုင်ပြည်နယ်', url: 'https://2024.myanmarexam.org/rke.html' },

      { id: 15, name: 'ရှမ်းပြည်နယ်', url: 'https://2024.myanmarexam.org/shn.html' },
    ]
  },
  '2023': {
    title: 'Result Lists',
    regions: [
      { id: 1, name: 'ရန်ကုန်တိုင်းဒေသကြီး', url: 'https://2023.myanmarexam.org/ygn.html' },

      { id: 2, name: 'မန္တလေးတိုင်းဒေသကြီး', url: 'https://2023.myanmarexam.org/mdy.html' },

      { id: 3, name: 'နေပြည်တော်', url: 'https://2023.myanmarexam.org/npw.html' },

      { id: 4, name: 'ဧရာဝတီတိုင်းဒေသကြီး', url: 'https://2023.myanmarexam.org/ayy.html' },

      { id: 5, name: 'စစ်ကိုင်းတိုင်းဒေသကြီး', url: 'https://2023.myanmarexam.org/sgg.html' },

      { id: 6, name: 'မကွေးတိုင်းဒေသကြီး', url: 'https://2023.myanmarexam.org/mgy.html' },

      { id: 7, name: 'ပဲခူးတိုင်းဒေသကြီး', url: 'https://2023.myanmarexam.org/bgo.html' },

      { id: 8, name: 'တနင်္သာရီတိုင်းဒေသကြီး', url: 'https://2023.myanmarexam.org/tni.html' },

      { id: 9, name: 'ကချင်ပြည်နယ်', url: 'https://2023.myanmarexam.org/kcn.html' },

      { id: 10, name: 'ကယားပြည်နယ်', url: 'https://2023.myanmarexam.org/kyh.html' },

      { id: 11, name: 'ကရင်ပြည်နယ်', url: 'https://2023.myanmarexam.org/kyn.html' },

      { id: 12, name: 'ချင်းပြည်နယ်', url: 'https://2023.myanmarexam.org/chn.html' },

      { id: 13, name: 'မွန်ပြည်နယ်', url: 'https://2023.myanmarexam.org/mon.html' },

      { id: 14, name: 'ရခိုင်ပြည်နယ်', url: 'https://2023.myanmarexam.org/rke.html' },

      { id: 15, name: 'ရှမ်းပြည်နယ်', url: 'https://2023.myanmarexam.org/shn.html' }
    ]
  },
  '2022': {
    title: 'Result Lists',
    regions: [
      { id: 1, name: 'ရန်ကုန်တိုင်းဒေသကြီး', url: 'https://2022.myanmarexam.org/ygn.html' },
      { id: 2, name: 'မန္တလေးတိုင်းဒေသကြီး', url: 'https://2022.myanmarexam.org/mdy.html' },
      { id: 3, name: 'နေပြည်တော်', url: 'https://2022.myanmarexam.org/npw.html' },
      { id: 4, name: 'ဧရာဝတီတိုင်းဒေသကြီး', url: 'https://2022.myanmarexam.org/ayy.html' },
      { id: 5, name: 'စစ်ကိုင်းတိုင်းဒေသကြီး', url: 'https://2022.myanmarexam.org/sgg.html' },
      { id: 6, name: 'မကွေးတိုင်းဒေသကြီး', url: 'https://2022.myanmarexam.org/mgy.html' },
      { id: 7, name: 'ပဲခူးတိုင်းဒေသကြီး', url: 'https://2022.myanmarexam.org/bgo.html' },
      { id: 8, name: 'တနင်္သာရီတိုင်းဒေသကြီး', url: 'https://2022.myanmarexam.org/tni.html' },
      { id: 9, name: 'ကချင်ပြည်နယ်', url: 'https://2022.myanmarexam.org/kcn.html' },
      { id: 10, name: 'ကယားပြည်နယ်', url: 'https://2022.myanmarexam.org/kyh.html' },
      { id: 11, name: 'ကရင်ပြည်နယ်', url: 'https://2022.myanmarexam.org/kyn.html' },
      { id: 12, name: 'ချင်းပြည်နယ်', url: 'https://2022.myanmarexam.org/chn.html' },
      { id: 13, name: 'မွန်ပြည်နယ်', url: 'https://2022.myanmarexam.org/mon.html' },
      { id: 14, name: 'ရခိုင်ပြည်နယ်', url: 'https://2022.myanmarexam.org/rke.html' },
      { id: 15, name: 'ရှမ်းပြည်နယ်', url: 'https://2022.myanmarexam.org/shn.html' }
    ]
  }
}; 