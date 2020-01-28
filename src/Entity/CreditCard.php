<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CreditCardRepository")
 */
class CreditCard
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $number;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datecard;

    /**
     * @ORM\Column(type="integer")
     */
    private $crypt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Users", inversedBy="creditcard")
     * @ORM\JoinColumn(nullable=false)
     */
    private $users;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getNumber(): ?int
    {
        return $this->number;
    }

    public function setNumber(int $number): self
    {
        $this->number = $number;

        return $this;
    }

    public function getDatecard(): ?\DateTimeInterface
    {
        return $this->datecard;
    }

    public function setDatecard(\DateTimeInterface $datecard): self
    {
        $this->datecard = $datecard;

        return $this;
    }

    public function getCrypt(): ?int
    {
        return $this->crypt;
    }

    public function setCrypt(int $crypt): self
    {
        $this->crypt = $crypt;

        return $this;
    }

    public function getUsers(): ?Users
    {
        return $this->users;
    }

    public function setUsers(?Users $users): self
    {
        $this->users = $users;

        return $this;
    }
}
