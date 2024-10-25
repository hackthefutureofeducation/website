"use client"
import { Card } from "./Card";

export function Services() {
    return (
        <section className="p-5 rounded-lg shadow-md lg:mx-[5%] my-[100px]" id="Services">
            <h1 className="text-3xl font-bold text-center mb-4 deviders">Services</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card title="Website" content="Create a website"/>
                <Card title="Create an E-book" content="Create a E-book using Kotobee Author"/>
                <Card title="Browser extenstion" content="Develop your dream browser extension"/>
                <Card title="Discord bot" content="Develop your dream discord bot"/>
            </div>
        </section>
    );
}