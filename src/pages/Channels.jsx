
import ChannelItem from "../components/ChannelItem";
import ChannelSelect from "../components/ChannelSelect";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Header from "../components/Header";

export default function Channels() {
    const channelList = [
        {
            avatar:
                "https://yt3.ggpht.com/vm448RYK-wIE7Qhh5A0aeueherdnTr5heI3nlNuKp3F_v_xEgBdMAZVrTH4WDYuMzAF7_x8KRg=s176-c-k-c0x00ffffff-no-rj-mo",
            name: "PHONK Beat",
            url: "https://www.youtube.com/@PhonkBreat",
            channels: [
                {
                    avatar:
                        "https://yt3.googleusercontent.com/7rkXK4g4Lbpetl0Bz9Wd35Y-p2bPTttMn_K4seCE2JmmXPrqOSd8atpeTbLSyo1sIrlSqB-xbg=s176-c-k-c0x00ffffff-no-rj-mo",
                    name: "Lofi Girl",
                    url: "https://www.youtube.com/@LofiGirl",
                },
                {
                    avatar:
                        "https://yt3.ggpht.com/B9PvKoXIC5DaigXMDusTLIJqJECcsbAZV_5n4krUMGyJQAPVLE-bHwtTGuz7Uo7eBIVo5Mgjlnc=s176-c-k-c0x00ffffff-no-rj-mo",
                    name: "Trap Nation",
                    url: "https://www.youtube.com/@TrapNation",
                },
            ],
        },
        {
            avatar:
                "https://yt3.googleusercontent.com/7rkXK4g4Lbpetl0Bz9Wd35Y-p2bPTttMn_K4seCE2JmmXPrqOSd8atpeTbLSyo1sIrlSqB-xbg=s176-c-k-c0x00ffffff-no-rj-mo",
            name: "Lofi Girl",
            url: "https://www.youtube.com/@LofiGirl",
            channels: [],
        },
        {
            avatar:
                "https://yt3.ggpht.com/B9PvKoXIC5DaigXMDusTLIJqJECcsbAZV_5n4krUMGyJQAPVLE-bHwtTGuz7Uo7eBIVo5Mgjlnc=s176-c-k-c0x00ffffff-no-rj-mo",
            name: "Trap Nation",
            url: "https://www.youtube.com/@TrapNation",
            channels: [],
        },
        {
            avatar:
                "https://yt3.ggpht.com/B9PvKoXIC5DaigXMDusTLIJqJECcsbAZV_5n4krUMGyJQAPVLE-bHwtTGuz7Uo7eBIVo5Mgjlnc=s176-c-k-c0x00ffffff-no-rj-mo",
            name: "Trap Nation",
            url: "https://www.youtube.com/@TrapNation",
            channels: [],
        },
    ];

    return (
        <div className="bg-gray-950 h-screen">
            <Header />
            <div className="mx-auto w-[1200px] pt-22">
                <TabGroup className="p-4">
                    <h2 className="text-gray-300 font-extrabold text-2xl my-4">Seus canais</h2>
                    {/* Abas */}
                    <TabList className="flex flex-wrap gap-2">
                        {channelList.map((channel) => (

                            <Tab key={`tab-${channel.name}`} className="cursor-pointer rounded-lg text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:bg-white/10 data-selected:data-hover:bg-white/10" >
                                <ChannelSelect name={channel.name} avatar={channel.avatar} />
                            </Tab>
                        ))}
                    </TabList>

                    {/* Painéis */}
                    <div>
                        <div className='bg-gray-700 p-4 rounded-lg mt-4'>
                            <p className='pb-4 text-gray-300'>Adicione um canal como fonte do seus cortes!</p>

                            <div className='flex gap-4'>
                                <input placeholder='URL do canal' className='w-full bg-gray-600  rounded-lg p-2 px-4' type="text" />
                                <button className='cursor-pointer p-2 px-4 bg-gray-600 hover:bg-gray-900 transition rounded-lg text-gray-400'>Adicionar</button>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-gray-300 font-extrabold text-lg my-4">Canais fontes</h2>
                    <TabPanels className="mt-4">
                        {channelList.map((channel) => (
                            <TabPanel key={`panel-${channel.name}`} className="space-y-4">
                                {/* Subcanais do canal ativo (se existirem) */}
                                {Array.isArray(channel.channels) && channel.channels.length > 0 ? (
                                    <div className="flex flex-col gap-3">
                                        {channel.channels.map((sub) => (
                                            <ChannelItem
                                                key={`sub-${channel.name}-${sub.name}`}
                                                avatar={sub.avatar}
                                                url={sub.url}
                                                name={sub.name}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-gray-400">Este canal não gerencia subcanais.</p>
                                )}
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    );
}




