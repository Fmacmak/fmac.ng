import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
// import { Redis } from "@upstash/redis";
// import { Eye } from "lucide-react";

// const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  // const views = (
  //   await redis.mget<number[]>(
  //     ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
  //   )
  // ).reduce((acc, v, i) => {
  //   acc[allProjects[i].slug] = v ?? 0;
  //   return acc;
  // }, {} as Record<string, number>);

  // const featured = allProjects.find((project) => project.slug === "unkey")!;
  // const top2 = allProjects.find((project) => project.slug === "planetfall")!;
  // const top3 = allProjects.find((project) => project.slug === "highstorm")!;
  // const sorted = allProjects
  //   .filter((p) => p.published)
  //   .filter(
  //     (project) =>
  //       project.slug !== featured.slug &&
  //       project.slug !== top2.slug &&
  //       project.slug !== top3.slug,
  //   )
  //   .sort(
  //     (a, b) =>
  //       new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
  //       new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
  //   );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            I've built robust systems for full-stack web apps, mobile backends, machine learning pipelines, and trading platforms. Each project demonstrates comprehensive backend architecture and infrastructure implementation.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`https://goalr.world`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100"></div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(0)}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-teal-600 group-hover:text-emerald-200 sm:text-4xl font-display"
                >
                  {"Goalr"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {"Compete and sync activity data from multiple sources with a chance to earn profits by meeting your goals."}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  {/* <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p> */}
                </div>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href={`https://www.busbuzzer.com`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100"></div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(0)}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-yellow-400 group-hover:text-yellow-200 sm:text-4xl font-display"
                >
                  {"Busbuzzer"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {"Track and route bus routes and trips with real time data."}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  {/* <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p> */}
                </div>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href={`https://www.tutela.com.ng`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100"></div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(0)}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-purple-400 group-hover:text-purple-200 sm:text-4xl font-display"
                >
                  {"Tutela"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {"All in one Estate Management System for residents and faciliity managers."}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  {/* <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p> */}
                </div>
              </article>
            </Link>
          </Card>

                 <Card>
            <Link href={`https://www.thth.ng/`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100"></div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(0)}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-cyan-500 group-hover:text-cyan-300 sm:text-4xl font-display"
                >
                  {"To have & to Hold"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {"Instax polaroid Printing and event booking."}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  {/* <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p> */}
                </div>
              </article>
            </Link>
          </Card>


         <Card>
            <Link href={`https://cvchat.fmac.ng/`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100"></div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(0)}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-slate-500 group-hover:text-cyan-300 sm:text-4xl font-display"
                >
                  {"CV chat"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {"AI CV screening with gemini."}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  {/* <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p> */}
                </div>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href={`https://newcvchat.fmac.ng/`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100"></div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(0)}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-slate-500 group-hover:text-slate-300 sm:text-4xl font-display"
                >
                  {"Improved CV chat"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {"AI CV screening with multiple models."}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  {/* <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p> */}
                </div>
              </article>
            </Link>
          </Card>


          <Card>
            <Link href={`https://api.plotpal.com.ng`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100"></div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(0)}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-emerald-400 group-hover:text-emerald-200 sm:text-4xl font-display"
                >
                  {"Plotpal"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {"Fractional ownership of land and properties."}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  {/* <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p> */}
                </div>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href={`https://hook.fmac.ng`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100"></div>
                  {/* <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(0)}
                  </span> */}
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-fuchsia-400 group-hover:text-fuchsia-200 sm:text-4xl font-display"
                >
                  {"Free Event Ticketing"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {"Free event ticketing with email, QR code validation and generation."}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  {/* <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p> */}
                </div>
              </article>
            </Link>
          </Card>



          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {/* {[top2, top3].map((project) => ( */}
              <Card key={"1"}>
                {/* <Article project={"project"} views={views[project.slug] ?? 0} /> */}
              </Card>
            {/* ))} */}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {/* {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => ( */}
                <Card key={"project.slug"}>
                  {/* <Article project={project} views={views[project.slug] ?? 0} /> */}
                </Card>
              {/* ))} */}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => ( */}
                <Card key={"project.slug"}>
                  {/* <Article project={project} views={views[project.slug] ?? 0} /> */}
                </Card>
              {/* ))} */}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => ( */}
                <Card key={"project.slug"}>
                  {/* <Article project={project} views={views[project.slug] ?? 0} /> */}
                </Card>
              {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
