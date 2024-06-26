
import { Show, createEffect, createSignal } from 'solid-js';
import { sessionState, setSocketData, socketData, socketStatus } from './state';
import { Connection } from './websocket';

export interface PoolStatus {
    connected_worker: number
    ready_worker: number
}

function ServerStatus() {
    const [status, setStatus] = createSignal<PoolStatus>({
        connected_worker: 0,
        ready_worker: 0
    })

    createEffect(() => {
        Connection(proc => {
            proc.listen('status_pool', data => {
                setStatus(data)
            })
        })
    })
    
    // fetch(socketData.socket_uri)
    return (
        <div class='p-3'>
            <b>{status().connected_worker}</b> Browser Connected <br />
            <b>{status().ready_worker}</b> Browser Ready Connected 
        </div>
    )
}

export default function AppInjectFrontend() {
    const [uri, setUri] = createSignal<string>(socketData.socket_uri)

    return <div class="grid grid-cols-2 h-28">
        <div class="p-2">
            <div class="flex w-full items-center gap-2">
                <input 
                    placeholder='Connect Server...'
                    value={socketData.socket_uri}
                    onChange={e => setUri(e.target.value)}
                    class='w-full px-2.5 py-1.5 outline-0 border border-stone-200 rounded placeholder:text-stone-400 focus:outline focus:outline-sky-400 focus:outline-4' />
                <div>
                    <button
                        onClick={() => {
                            setSocketData("socket_uri", uri())
                        }}
                        class="bg-sky-500 text-white px-2 py-1 rounded shadow capitalize"
                    >set</button>
                    
                </div>
                <Show when={socketStatus.connected}>
                    <span class='px-2.5 text-sm py-1 bg-emerald-500 text-white rounded shadow w-max h-min'>
                        <span>Connected</span>
                    </span>
                </Show>
                <Show when={socketStatus.joined}>
                    <span class='px-2.5 text-sm py-1 bg-emerald-500 text-white rounded shadow w-max h-min'>
                        <span>Joined</span>
                    </span>
                </Show>
            </div>
            <ServerStatus />

        </div>

        

        

        <div class="p-2">
        
            <b>Data Page :</b>
            <div class="grid grid-cols-2">
                <div>
                    view_session_id
                </div>
                <div>
                    : <b>{sessionState.view_session_id}</b>
                </div>
            </div>

        </div>



    </div>
}