<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UsersRepository")
 */
class Users
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
    private $First_name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Last_name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Password;

    /**
     * @ORM\Column(type="date")
     */
    private $Anniversary;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Adress;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $State;

        /**
     * @ORM\Column(type="string", length=255)
     */
    private $picture;

    /**
     * @ORM\Column(type="integer")
     */
    private $Postal;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Admin;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Kart", mappedBy="user", cascade={"persist", "remove"})
     */
    private $kart;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comments", mappedBy="user", orphanRemoval=true)
     */
    private $comments;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Country;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CreditCard", mappedBy="users", orphanRemoval=true)
     */
    private $creditcard;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $phone;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Adress", mappedBy="user", orphanRemoval=true)
     */
    private $adresses;


    public function __construct()
    {
        $this->comments = new ArrayCollection();
        $this->creditcard = new ArrayCollection();
        $this->adresses = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->First_name;
    }

    public function setFirstName(string $First_name): self
    {
        $this->First_name = $First_name;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->Last_name;
    }

    public function setLastName(string $Last_name): self
    {
        $this->Last_name = $Last_name;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->Email;
    }

    public function setEmail(string $Email): self
    {
        $this->Email = $Email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->Password;
    }

    public function setPassword(string $Password): self
    {
        $this->Password = $Password;

        return $this;
    }

    public function getAnniversary(): ?\DateTimeInterface
    {
        return $this->Anniversary;
    }

    public function setAnniversary(\DateTimeInterface $Anniversary): self
    {
        $this->Anniversary = $Anniversary;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->Adress;
    }

    public function setAdress(string $Adress): self
    {
        $this->Adress = $Adress;

        return $this;
    }

    public function getState(): ?string
    {
        return $this->State;
    }

    public function setState(string $State): self
    {
        $this->State = $State;

        return $this;
    }

    public function getPostal(): ?int
    {
        return $this->Postal;
    }

    public function setPostal(int $Postal): self
    {
        $this->Postal = $Postal;

        return $this;
    }

    public function getAdmin(): ?bool
    {
        return $this->Admin;
    }

    public function setAdmin(bool $Admin): self
    {
        $this->Admin = $Admin;

        return $this;
    }

    public function getKart(): ?Kart
    {
        return $this->kart;
    }

    public function setKart(Kart $kart): self
    {
        $this->kart = $kart;

        // set the owning side of the relation if necessary
        if ($kart->getUser() !== $this) {
            $kart->setUser($this);
        }

        return $this;
    }

    /**
     * @return Collection|Comments[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comments $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setUser($this);
        }

        return $this;
    }

    public function removeComment(Comments $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getUser() === $this) {
                $comment->setUser(null);
            }
        }

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->Country;
    }

    public function setCountry(string $Country): self
    {
        $this->Country = $Country;

        return $this;
    }

    /**
     * @return Collection|CreditCard[]
     */
    public function getCreditcard(): Collection
    {
        return $this->creditcard;
    }

    public function addCreditcard(CreditCard $creditcard): self
    {
        if (!$this->creditcard->contains($creditcard)) {
            $this->creditcard[] = $creditcard;
            $creditcard->setUsers($this);
        }

        return $this;
    }

    public function removeCreditcard(CreditCard $creditcard): self
    {
        if ($this->creditcard->contains($creditcard)) {
            $this->creditcard->removeElement($creditcard);
            // set the owning side to null (unless already changed)
            if ($creditcard->getUsers() === $this) {
                $creditcard->setUsers(null);
            }
        }

        return $this;
    }

    public function getPhone(): ?int
    {
        return $this->phone;
    }

    public function setPhone(?int $phone): self
    {
        $this->phone = $phone;

        return $this;
    }


    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    /**
     * @return Collection|Adress[]
     */
    public function getAdresses(): Collection
    {
        return $this->adresses;
    }

    public function addAdress(Adress $adress): self
    {
        if (!$this->adresses->contains($adress)) {
            $this->adresses[] = $adress;
            $adress->setUser($this);
        }

        return $this;
    }

    public function removeAdress(Adress $adress): self
    {
        if ($this->adresses->contains($adress)) {
            $this->adresses->removeElement($adress);
            // set the owning side to null (unless already changed)
            if ($adress->getUser() === $this) {
                $adress->setUser(null);
            }
        }

        return $this;
    }
}