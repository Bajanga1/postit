'use client'

import Image from "next/image"
import Link from "next/link"

export default function Post({ avatar, name, postTitle, id, comments }) {
    return (
        <div className="bg-white my-8 py-8 rounded-lg">
            <div className="flex items-center gap-2">
                <Image width={32} height={32} src={avatar} className="w-14 rounded-full" priority alt="" />
                <h3 className="font-bold text-gray-700">{name}</h3>
            </div>
            <div className="my-8"> 
                <p className="break-all">{postTitle}</p>
            </div>
            <div className="flex gap-4 cursor-pointer items-center">
                <Link href={`/post/${id}`}>
                    <p className="text-sm font-bold text-gray-700">{comments.length} Comments</p>
                </Link>
            </div>
        </div >
    )
}