import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function Example() {
    return (
        <div className="bg-red-600 py-24 sm:py-32 ">
            <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
                    <p className="mt-2 text-5xl font-bold tracking-tight text-amber-200 sm:text-4xl">
                        About Me!
                    </p>
                    <p className="mt-6 text-lg leading-8 text-yellow-200">
                        I'm a creative video editor and a graphic designer working globally from <b>India</b>. I help personal brand and Businesses to improve their content quality and watching time through Editing.

                    </p>
                    <p className="mt-6 text-lg leading-8 text-yellow-200">
                        Through out my dedicated 4+ year of experiences <b>in video editing and graphic designing</b>. I have had the privilege of working with <b>more than 5+ Clients and under 2 Organisations</b>. So if you are looking to build your audience by engaging videos. So reach out me through Dm and <b>"Lets build your content together."</b>
                    </p>
                </div>
                {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div> */}
            </div>
        </div>
    )
}
