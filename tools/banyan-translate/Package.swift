// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "banyan-translate",
    platforms: [.macOS(.v14)],
    products: [
        .executable(name: "banyan-translate", targets: ["BanyanTranslate"]),
    ],
    targets: [
        .executableTarget(name: "BanyanTranslate"),
    ]
)
