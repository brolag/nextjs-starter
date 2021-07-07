import Head from "next/head";
import React, { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import Footer from "@components/Footer";

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <main className="flex flex-col h-screen justify-between bg-gradient-to-r from-blue-900 to-black">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `https://identity.netlify.com/v1/netlify-identity-widget.js`,
            }}
          />
        </Head>
        <div className="flex-col justify-start">
          <section className="text-white p-20">
            <h1 className="text-4xl">{title}</h1>
          </section>
          <section className="text-white p-20">
            <HomeContent />
            <ul>
              {cats.map((cat, k) => (
                <li key={k}>
                  <h2>{cat.name}</h2>
                  <p>{cat.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <Footer />
      </main>
    );
  }
}
