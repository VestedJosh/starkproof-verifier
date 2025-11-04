/* tslint:disable */
/* eslint-disable */
export function verify_proof(receipt_hex: string, program_id_hex: string): WasmVerificationResult;
export class WasmVerificationResult {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  readonly valid: boolean;
  readonly error: string | undefined;
  readonly journal_hash: string;
  readonly receipt_type: string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_wasmverificationresult_free: (a: number, b: number) => void;
  readonly wasmverificationresult_valid: (a: number) => number;
  readonly wasmverificationresult_error: (a: number) => [number, number];
  readonly wasmverificationresult_journal_hash: (a: number) => [number, number];
  readonly wasmverificationresult_receipt_type: (a: number) => [number, number];
  readonly verify_proof: (a: number, b: number, c: number, d: number) => number;
  readonly sys_pause: (a: number, b: number) => void;
  readonly sys_halt: (a: number, b: number) => void;
  readonly sys_rand: (a: number, b: number) => void;
  readonly syscall_2_nr: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly sys_cycle_count: () => bigint;
  readonly sys_log: (a: number, b: number) => void;
  readonly sys_input: (a: number) => number;
  readonly sys_verify_integrity: (a: number, b: number) => void;
  readonly sys_panic: (a: number, b: number) => void;
  readonly sys_read: (a: number, b: number, c: number) => number;
  readonly sys_read_words: (a: number, b: number, c: number) => number;
  readonly sys_sha_buffer: (a: number, b: number, c: number, d: number) => void;
  readonly sys_sha_compress: (a: number, b: number, c: number, d: number) => void;
  readonly sys_poseidon2: (a: number, b: number, c: number, d: number) => void;
  readonly sys_bigint: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly sys_write: (a: number, b: number, c: number) => void;
  readonly sys_getenv: (a: number, b: number, c: number, d: number) => number;
  readonly sys_argc: () => number;
  readonly sys_argv: (a: number, b: number, c: number) => number;
  readonly sys_alloc_words: (a: number) => number;
  readonly sys_alloc_aligned: (a: number, b: number) => number;
  readonly sys_fork: () => number;
  readonly sys_pipe: (a: number) => number;
  readonly sys_exit: (a: number) => void;
  readonly sys_keccak: (a: number, b: number) => number;
  readonly sys_prove_keccak: (a: number, b: number) => void;
  readonly syscall_0: (a: number, b: number, c: number, d: number) => void;
  readonly syscall_0_nr: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly syscall_1: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly syscall_1_nr: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly syscall_2: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly syscall_3: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly syscall_3_nr: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly syscall_4: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly syscall_4_nr: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly syscall_5: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly syscall_5_nr: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => void;
  readonly sys_bigint2_1: (a: number, b: number) => void;
  readonly sys_bigint2_2: (a: number, b: number, c: number) => void;
  readonly sys_bigint2_3: (a: number, b: number, c: number, d: number) => void;
  readonly sys_bigint2_4: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly sys_bigint2_5: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly sys_bigint2_6: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly sys_verify_integrity2: (a: number, b: number) => void;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
