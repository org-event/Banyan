// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "BanyanSpeech",
    platforms: [.macOS(.v14)],
    products: [
        .executable(name: "BanyanSpeech", targets: ["BanyanSpeechAuth"]),
    ],
    targets: [
        .executableTarget(name: "BanyanSpeechAuth"),
    ]
)
