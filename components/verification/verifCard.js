import { useEffect, useState, useRef } from "react"
import { API_URL } from "../../lib/constants"
import { useRouter } from 'next/router';

export default function VerifCard({ mail }) {
    const router = useRouter();

    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [fourth, setFourth] = useState('')
    const [fifth, setFifth] = useState('')
    const [sixth, setSixth] = useState('')

    const SendVerifCode = async (mail) => {

        const endpoint = API_URL + `/auth/sendverification?mail=${mail}`;

        const options = {
            method: "GET",
            mode: "cors",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            },
        };
        const response = await fetch(endpoint, options)
    }
    const Verify = async (mail) => {
        let code = first + second + third + fourth + fifth + sixth
        const body = {
            code: code,
            mail: mail
        };
        console.log("alperen")
        const endpoint = API_URL + "/auth/verify";

        const options = {
            method: "POST",
            mode: "cors",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        const response = await fetch(endpoint, options)
        console.log(response)

        if (response.status == 200) {
            router.push("/login")
        }
        else {
            console.log("error")
        }
    }
    const inputs = useRef([]);

    useEffect(() => {
        inputs.current.forEach((input, index) => {
            input.addEventListener("input", (event) => {
                if (input.value.length === 1) {
                    let nextInput = inputs.current[index + 1];
                    if (nextInput) {
                        nextInput.focus();
                    }
                }
            });
        });
    }, []);
    return (

        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12 items-center">

            <div className="relative bg-white px-3 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div>
                    <button
                        className="flex flex-row items-center m-auto my-5 justify-center text-center w-1/2 border rounded-xl outline-none py-5 bg-purple-700 hover:bg-purple-400 border-none text-white text-sm shadow-sm"
                        onClick={() => { SendVerifCode(mail) }}
                    >
                        Send Code
                    </button>
                </div>
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Email Verification</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>Your email {mail}</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col space-y-16">
                            <div className="flex flex-col space-y-16">
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    <div className="w-12 h-12 ">
                                        <input className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="number" min={0} max={9} name="" id="first"
                                            onChange={(e) => {
                                                setFirst(e.target.value)
                                            }}
                                            ref={(el) => {
                                                inputs.current[0] = el;
                                            }}
                                        />
                                    </div>
                                    <div className="w-12 h-12 ">
                                        <input className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="number" min={0} max={9} name="" id="first"
                                            onChange={(e) => {
                                                setSecond(e.target.value)
                                            }}
                                            ref={(el) => {
                                                inputs.current[1] = el;
                                            }}
                                        />
                                    </div>
                                    <div className="w-12 h-12 ">
                                        <input className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="number" min={0} max={9} name="" id="first"
                                            onChange={(e) => {
                                                setThird(e.target.value)
                                            }}
                                            ref={(el) => {
                                                inputs.current[2] = el;
                                            }}
                                        />
                                    </div>
                                    <div className="w-12 h-12 ">
                                        <input className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="number" min={0} max={9} name="" id="first"
                                            onChange={(e) => {
                                                setFourth(e.target.value)
                                            }}
                                            ref={(el) => {
                                                inputs.current[3] = el;
                                            }}
                                        />
                                    </div>
                                    <div className="w-12 h-12 ">
                                        <input className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="number" min={0} max={9} name="" id="first"
                                            onChange={(e) => {
                                                setFifth(e.target.value)
                                            }}
                                            ref={(el) => {
                                                inputs.current[4] = el;
                                            }}
                                        />
                                    </div>
                                    <div className="w-12 h-12 ">
                                        <input className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="number" min={0} max={9} name="" id="first"
                                            onChange={(e) => {
                                                setSixth(e.target.value)
                                            }}
                                            ref={(el) => {
                                                inputs.current[5] = el;
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-5">
                                <div>
                                    <button
                                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-purple-700 hover:bg-purple-400 border-none text-white text-sm shadow-sm"
                                        onClick={() => { Verify(mail) }}
                                    >
                                        Verify Account
                                    </button>
                                </div>

                                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                    <p>Did not recieve code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}