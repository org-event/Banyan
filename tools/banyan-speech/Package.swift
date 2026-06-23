// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "banyan-speech",
    platforms: [.macOS(.v14)],
    products: [
        .executable(name: "banyan-speech", targets: ["BanyanSpeech"]),
    ],
    targets: [
        .executableTarget(
            name: "BanyanSpeech"
        ),
    ]
)
