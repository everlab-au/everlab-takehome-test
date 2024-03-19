{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.nodePackages_latest.pnpm
  ];

  shellHook = ''
    echo "just start cooking";
    zsh
  '';
}
