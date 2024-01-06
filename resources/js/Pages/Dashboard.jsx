import React, {useState} from "react";
import { router } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Dashboard({ auth, status }) {

    const { data, setData, post, processing, errors } = useForm({
        name: "anderson",
        id: 1,
        fodase: true
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('teste'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                        <form onSubmit={handleSubmit}>
                        <button type="submit">teste</button>
                        <br/>
                        {data?.name}
                        <br/>
                        {data?.id}
                        <br/>
                        {data?.fodase ? "é true" : "é false"}
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
