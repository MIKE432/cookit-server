export function apply<T>(target: T, f: (t: T) => void ): T {
    f(target)
    return target
}